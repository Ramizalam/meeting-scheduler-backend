import { Router } from "express";
import userRoutes from "./user.route.js";
import meetingRoutes from "./meeting.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/meetings", meetingRoutes);

export default router;