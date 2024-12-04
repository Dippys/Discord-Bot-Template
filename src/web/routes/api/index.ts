import express, {Router} from "express";


const apiRoutes = Router();

apiRoutes.post("/test", (req: express.Request, res: express.Response) : void => {
    res.json(req.body);

    // respond with a 200 status code
    res.status(204);
});

export default apiRoutes;
