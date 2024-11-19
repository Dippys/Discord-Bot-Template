import {Router} from "express";
import apiRoutes from "./api"; // Import API routes
import discordRouter from "./api/discord";

const router = Router();

// Mount sub-route modules
router.use("/api", apiRoutes);


router.use('/api/discord', discordRouter);

export default router;
