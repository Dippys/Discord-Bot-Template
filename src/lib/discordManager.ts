import {Client, Events, IntentsBitField, Interaction, Partials, GatewayIntentBits} from "discord.js";
import InteractionHandler from "../discord/InteractionHandler";

class DiscordManager {
    private static instance: DiscordManager;
    readonly client: Client;
    readonly interactionHandler: InteractionHandler;

    private constructor() {
        const intents : GatewayIntentBits[] = [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.DirectMessages, IntentsBitField.Flags.DirectMessageReactions, IntentsBitField.Flags.MessageContent];

        const partials : Partials[] = [Partials.User, Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction,];

        this.client = new Client({intents, partials});

        this.interactionHandler = new InteractionHandler(process.env.DISCORD_TOKEN || '', process.env.DISCORD_CLIENT_ID || '', process.env.DISCORD_TEST_GUILD_ID || '');

        // Initialize command handling
        this.initializeInteractions().then(() => {});

        this.client
            .login(process.env.DISCORD_TOKEN)
            .then(() : void => {
                if (this.client.user) {
                    console.log(`Logged in as ${this.client.user.tag}`);
                }
            })
            .catch((err : Error) : void => {
                console.error("Error logging into Discord: ", err);
            });
    }

    public static getInstance(): DiscordManager {
        if (!DiscordManager.instance) {
            DiscordManager.instance = new DiscordManager();
        }
        return DiscordManager.instance;
    }

    public getClient() : Client<boolean> {
        return this.client;
    }

    private async initializeInteractions() : Promise<void> {
        // Load commands when the client is ready
        this.client.once(Events.ClientReady, async () => {
            try {
                // Load all commands
                await this.interactionHandler.loadAllInteractions();

                if (process.env.REGISTER_INTERACTIONS === 'true') {
                    // Register commands with Discord true/false
                    await this.interactionHandler.registerInteractions(process.env.DISCORD_USE_GLOBAL_INTERACTIONS === 'true');
                }
            } catch (error) {
                console.error('Error initializing commands:', error);
            }
        });

        this.client.on(Events.InteractionCreate, async (interaction: Interaction) : Promise<void> => {
            await this.interactionHandler.handleInteraction(interaction);
        });
    }
}

export default DiscordManager;