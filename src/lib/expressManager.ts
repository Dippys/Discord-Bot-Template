import express, {Application} from "express";

class ExpressManager {
    private static instance: ExpressManager;
    readonly app: Application;

    private constructor() {
        this.app = express();
        this.initializeMiddleware();
        this.startServer();
    }

    public static getInstance(): ExpressManager {
        if (!ExpressManager.instance) {
            ExpressManager.instance = new ExpressManager();
        }
        return ExpressManager.instance;
    }

    public getApp() {
        return this.app;
    }

    private initializeMiddleware() {
    }

    private startServer() {
        const PORT : number = parseInt(process.env.PORT || "3000", 10);
        this.app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
}

export default ExpressManager;
