import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createMeeting, getMeetings,getMeetingById,updateMeeting,deleteMeeting } from "../meeting/index/meeting.controller.js";

const router  = Router();

router.post("/create",authMiddleware,createMeeting);
router.get("/",authMiddleware,getMeetings);
router.get("/:id",authMiddleware,getMeetingById);
router.put("/:id",authMiddleware,updateMeeting);
router.delete("/:id",authMiddleware,deleteMeeting);

export default router;