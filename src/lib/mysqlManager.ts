
import { createConnection } from "mysql2/promise";

class Database {
    private static instance: Database;
    readonly connection: any;

    private constructor() {
        this.connection = createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async ping(): Promise<number> {
        try {
            const connection = await this.connection;
            const [rows] = await connection.execute("SELECT 1 + 1 AS result");
            return rows[0].result;
        } catch (err) {
            console.error("Database ping error:", err);
            throw err;
        }
    }

    public async query(sql: string, args: any[] = []): Promise<any> {
        try {
            const connection = await this.connection;
            const [rows] = await connection.execute(sql, args);
            return rows;
        } catch (err) {
            console.error("Database query error:", err);
            throw err;
        }
    }

    public async connect(): Promise<void> {
        try {
            const connection = await this.connection;
            console.log("Database connected successfully.");
        } catch (err) {
            console.error("Database connection error:", err);
            throw err;
        }
    }
}

export default Database;
