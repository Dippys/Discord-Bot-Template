import mysql, {QueryError} from "mysql2";

class Database {
    private static instance: Database;
    readonly connection: mysql.Connection;

    private constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });

        this.connect();
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public GetUser(id: string): Promise<mysql.RowDataPacket | null> {
        return new Promise<mysql.RowDataPacket | null>((resolve: (value: mysql.RowDataPacket | null) => void, reject: (reason?: any) => void) => {
            this.connection.query("SELECT * FROM users WHERE id = ?", [id], (err : QueryError | null, results: mysql.RowDataPacket[]) : void => {
                if (err) {
                    console.error("Error getting user: ", err);
                    return reject(err); // Reject the promise with the error
                }
                resolve(results[0]); // Resolve the promise with the user object
            });
        });
    }

    private connect() : void {
        this.connection.connect((err : QueryError | null) : void => {
            if (err) {
                console.error("Error connecting to the database: ", err);
                return;
            }
            console.log("Connected to the database as thread ID " + this.connection.threadId);
        });
    }

}

export default Database;
