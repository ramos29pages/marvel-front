import { IUser} from './user'


export interface UserMessage {
    id: number,
    userSender: IUser,
    userReceiver: IUser,
    message: string,
    createdDate: Date,
    read ?: boolean
}

export interface LastMessage{
  noRead: number,
}


export interface Message {
  id: number;
  message: string;
  createdDate: Date;
  senderId: number;
  receiverId: number;
  read: boolean;
}

export interface MessagesByDate {
  [date: string]: Message[];
}
