export default interface TimeSlot {
  membership: string;
  startTime: string;
  startTimeValue: number;
  endTime: string;
  endTimeValue: number;
  status: string;
  reservedBy: number;
  reservedWith: number;
}
