import fs from 'fs';
import path from 'path';
import EventManager from "../lib/eventManager";
import { Event } from './types';

class EventHandler {
    private static instance: EventHandler;
    private readonly eventsFolder: string = path.join(__dirname, 'events');

    private constructor() {}

    public static async getInstance(): Promise<EventHandler> {
        if (!EventHandler.instance) {
            EventHandler.instance = new EventHandler();
            await EventHandler.instance.loadEvents();
        }
        return EventHandler.instance;
    }

    private async loadEvents(): Promise<void> {
        console.log('Starting event handler setup...');
        const eventFolders: string[] = this.getEventFolders(this.eventsFolder);

        if (eventFolders.length === 0) {
            console.warn('No event folders found. Ensure events are properly structured.');
        } else {
            console.log(`Found ${eventFolders.length} event(s) to load.`);
        }

        for (const folder of eventFolders) {
            try {
                const eventModule: { default: Event } = await import(folder);

                // Check if the imported module follows the event structure
                if ('name' in eventModule.default && 'execute' in eventModule.default) {
                    this.registerEvent(eventModule.default);
                } else {
                    console.warn(`Event in ${folder} does not match the expected structure.`);
                }
            } catch (error) {
                console.error(`Error loading event from folder ${folder}:`, error);
            }
        }

        console.log('Event handler setup completed.');
    }

    private getEventFolders(folder: string): string[] {
        const eventFolders: string[] = [];
        const filesAndFolders: fs.Dirent[] = fs.readdirSync(folder, { withFileTypes: true });

        filesAndFolders.forEach((entry) => {
            const fullPath: string = path.join(folder, entry.name);

            if (entry.isDirectory()) {
                const indexPath: string = path.join(fullPath, 'index.ts');
                const indexJsPath: string = path.join(fullPath, 'index.js');
                if (fs.existsSync(indexPath) || fs.existsSync(indexJsPath)) {
                    eventFolders.push(fullPath);
                }
            }
        });

        return eventFolders;
    }

    private registerEvent(event: Event): void {
        console.log(`Registering event '${event.name}'...`);
        EventManager.getInstance().on(event.name, event.execute);
        console.log(`Event '${event.name}' registered successfully.`);
    }
}

export default EventHandler;