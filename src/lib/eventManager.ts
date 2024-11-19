import * as events from 'events';

class EventManager {
    private static instance: EventManager;
    private eventEmitter: events.EventEmitter;

    private constructor() {
        this.eventEmitter = new events.EventEmitter();
    }

    // Getter for the singleton instance
    public static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    // Method to emit an event
    public emit(event: string, ...args: any[]): boolean {
        return this.eventEmitter.emit(event, ...args);
    }

    // Method to listen for an event
    public on(event: string, listener: (...args: any[]) => void): void {
        this.eventEmitter.on(event, listener);
    }
}

export default EventManager;