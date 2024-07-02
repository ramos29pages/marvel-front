import { IUser} from './user'


export interface UserMessage {
    id: number,
    user: IUser,
    lastMessage: string,
    lastHour: string,
    imgURL: string
}
