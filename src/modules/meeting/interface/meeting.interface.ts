
export interface IMeeting {
  id: string;
  title: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
}