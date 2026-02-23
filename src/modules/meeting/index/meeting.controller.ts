import type { Request, Response } from "express";
import { meetingService } from "../service/meeting.service.js";
import type { CreateMeetingDTO } from "../dto/create-meeting.dto.js";


export const createMeeting = async (req: Request, res: Response) => {
    try {
        const data : CreateMeetingDTO = {
            ...req.body,
            userId: res.locals.userId
        }
        const meeting = await meetingService.createMeeting(data);
        return res.status(201).json(meeting);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};

export const getMeetings = async (req: Request, res: Response) => {
    try {
        const meeting = await meetingService.getMeetings(res.locals.userId);
        return res.status(200).json(meeting);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const getMeetingById = async (req: Request, res: Response) => {
    try {
        const meeting = await meetingService.getMeetingById(req.params.id as string);
        return res.status(200).json(meeting);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const updateMeeting = async (req: Request, res: Response) => {
    try {
        const meeting = await meetingService.updateMeeting(req.params.id as string, res.locals.userId, req.body);
        return res.status(200).json(meeting);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const deleteMeeting = async (req: Request, res: Response) => {
    try {
        await meetingService.deleteMeeting(req.params.id as string);
        return res.status(200).json({ message: "Meeting deleted successfully" });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}



