export type User = {
    id: number,
    name: string,
    companyName: string,
    workPosition: string,
    country: string,

}



export interface UserMessage {
    id: number,
    user: User,
    lastMessage: string,
    lastHour: string,
    imgURL: string
}