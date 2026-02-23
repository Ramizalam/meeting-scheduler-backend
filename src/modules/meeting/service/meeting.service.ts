import { Op } from "sequelize";
import type { CreateMeetingDTO } from "../dto/create-meeting.dto.js";
import { Meeting } from "../module/meeting.model.js";
import type { UpdateMeetingDTO } from "../dto/update-meeting.dto.js";

export class MettingService{
    async createMeeting(data: CreateMeetingDTO){
        const {startTime,endTime,userId} = data

        if( new Date(startTime)>= new Date(endTime)){
            throw new Error("start  time must be before end time ")
        }

        const overlappingMetting = await Meeting.findOne({
            where:{
                userId,
                startTime:{
                    [Op.lt]:endTime   // exisiting.startTime < newEndTime
                },
                endTime:{
                    [Op.gt]:startTime //exisiting.endTime > newStartTime
                }
            }
        })

        if(overlappingMetting){
            throw new Error(" new metting time overlap with the exisiting meeeting ")
        }

        const newMeeting = await Meeting.create(data);
        return newMeeting;

    }
    async getMeetings(userId:string){
        try {
            const meeting = await Meeting.findAll({
            where:{
                userId
            }
        })
        return meeting
        } catch (error) {
            throw new Error("error getting meetings")
        }
    }
    async getMeetingById(id:string){
        const meeting = await Meeting.findByPk(id);
        return meeting
    }
    async updateMeeting(id:string ,userId:string,data:UpdateMeetingDTO){
        const meeting = await Meeting.findByPk(id);
        if(!meeting){
            throw new Error("meeting not found")
        }

        if(data.startTime && data.endTime){
            const overlappingMeeting = await Meeting.findOne({
                where:{
                    userId,
                    id:{
                        [Op.ne]:id
                    },
                    startTime:{
                        [Op.lt]:data.endTime 
                    },
                    endTime:{
                        [Op.gt]:data.startTime
                    }
                }
            })
        
            if (overlappingMeeting) {
                throw new Error(" new metting time overlap with the exisiting meeeting ")
            }

        }

        try {
            await meeting.update(data);
            return meeting
        } catch (error) {
            throw new Error("error updating meeting")
        }
    }
    async deleteMeeting(id:string){
        const meeting = await Meeting.findByPk(id);
        if(!meeting){
            throw new Error("meeting not found")
        }
        await meeting.destroy();
        return meeting
    }
}

export const meetingService = new MettingService();
