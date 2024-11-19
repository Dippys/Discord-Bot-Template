import express, {Router} from "express";
import db from "../../../lib/mysqlManager";
import {RowDataPacket} from "mysql2";


const apiRoutes = Router();

// user/[id] get route
apiRoutes.get("/user/:id", async (req: express.Request, res: express.Response) : Promise<void> => {

    const id: string = req.params.id;
    const user : RowDataPacket | null = await db.getInstance().GetUser(id);
    res.json(user);

});

apiRoutes.post("/test", (req: express.Request, res: express.Response) : void => {
    res.json(req.body);

    // respond with a 200 status code
    res.status(204);
});

export default apiRoutes;
