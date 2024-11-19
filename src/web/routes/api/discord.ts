import express, {NextFunction, Request, Response} from 'express';
import nacl from 'tweetnacl';
import getRawBody from 'raw-body';
import EventManager from "../../../lib/eventManager";
import DotenvManager from "../../../lib/envManager";

const router = express.Router();

interface DiscordRequest extends Request {
    rawBody: Buffer;
}

interface DiscordWebhookBody {
    type: number;
    version: number;
    application_id: string;
    event?: {
        type: string; timestamp: string; data: any;
    };
}

const rawBodyMiddleware: express.RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        (req as DiscordRequest).rawBody = await getRawBody(req);
        next();
    } catch (err) {
        console.error('Error reading raw body:', err);
        res.status(400).send('Error reading request body');
        return;
    }
};

export interface EventData {
    integration_type: number;
    scopes: string[];
    user: UserData;
}

export interface UserData {
    avatar: string;
    avatar_decoration_data: string | null;
    clan: string | null;
    discriminator: string;
    global_name: string;
    id: string;
    public_flags: number;
    username: string;
}

async function ApplicationAuthorization(data: EventData): Promise<void> {
    EventManager.getInstance().emit('application_authorized', data);
}

async function EntitlementCreate(data: EventData): Promise<void> {
    // send an event to the event emitter
    EventManager.getInstance().emit('entitlement_create', data);
}

async function QuestUserEnrollment(data: any): Promise<void> {
    // send an event to the event emitter
    EventManager.getInstance().emit('quest_user_enrollment', data);
}

const verifySignature: express.RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    const discordReq = req as DiscordRequest;
    const signature: string | string[] | undefined = discordReq.headers['x-signature-ed25519'];
    const timestamp: string | string[] | undefined = discordReq.headers['x-signature-timestamp'];

    const PUBLIC_KEY = DotenvManager.getInstance().getEnv('DISCORD_PUBLIC_KEY') as string;

    if (!signature || !timestamp || typeof signature !== 'string' || typeof timestamp !== 'string') {
        res.status(401).send('Invalid request signature');
        return;
    }

    try {
        const isVerified: boolean = nacl.sign.detached.verify(Buffer.concat([Buffer.from(timestamp), discordReq.rawBody]), Buffer.from(signature, 'hex'), Buffer.from(PUBLIC_KEY, 'hex'));

        if (!isVerified) {
            res.status(401).send('Invalid request signature');
            return;
        }

        req.body = JSON.parse(discordReq.rawBody.toString());
        next();
    } catch (err) {
        console.error('Error verifying signature:', err);
        res.status(401).send('Invalid request signature');
        return;
    }
};

// Webhook handler remains the same
const webhookHandler: express.RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as DiscordWebhookBody;

        if (body.type === 0) {
            res.status(204).send();
            return;
        }

        const {event} = body;

        if (!event) {
            res.status(400).send('Missing event data');
            return;
        }

        switch (event.type) {
            case 'APPLICATION_AUTHORIZED': {
                const data = event.data as EventData;

                await ApplicationAuthorization(data);

                break;
            }

            case 'ENTITLEMENT_CREATE': {
                const data = event.data as EventData;

                await EntitlementCreate(data);

                break;
            }

            case 'QUEST_USER_ENROLLMENT': {
                await QuestUserEnrollment(event.data);
                break;
            }

            default:
                console.log('Unknown event type:', event.type);
        }

        res.status(204).send();
        return;

    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).send('Internal server error');
        return;
    }
};

router.post('/discord-webhook', rawBodyMiddleware, verifySignature, webhookHandler);

export default router;