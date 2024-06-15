export interface UserDynamicSlots {
  _id: number,
  user_id: number,
  startTime: Date;
  startTimeRest: Date;
  endTime: Date;
  duration: number;
  rest: number;
  reserved: boolean;
  user: userSlot;
}

interface userSlot{
  name: string;
  company_name: string;
}

//SELECT * FROM Slots WHERE user_id = USER_ID
export interface userDBSlots{
    _id: number,
    user_id: number,
    startTime : string,
    startTimeRest: string,
    endTime: string,
    duration: number,
    rest: number,
    reserved: boolean
}
