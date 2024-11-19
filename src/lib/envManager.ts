import * as dotenv from 'dotenv';

class DotenvManager {
    private static instance: DotenvManager;

    private constructor() {
        // Load environment variables
        dotenv.config();
    }

    // Getter for the singleton instance
    public static getInstance(): DotenvManager {
        if (!DotenvManager.instance) {
            DotenvManager.instance = new DotenvManager();
        }
        return DotenvManager.instance;
    }

    // Method to get an environment variable with optional default value
    public getEnv(key: string, defaultValue?: string): string | undefined {
        return process.env[key] || defaultValue;
    }
}

export default DotenvManager;