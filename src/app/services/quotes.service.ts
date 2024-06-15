import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDynamicSlots } from '../models/slots';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  getQuotes(): Observable<{ date: Date, quote: string }[]> {
    // Reemplaza esto con la llamada real al servidor
    return of([
      { date: new Date(2024, 5, 12), quote: 'Cita 1' },
      { date: new Date(2024, 5, 15), quote: 'Cita 2' },
      { date: new Date(2024, 5, 25), quote: 'Cita 3' },
      { date: new Date(2024, 5, 27), quote: 'Cita 3' },
      { date: new Date(2024, 5, 30), quote: 'Cita 3' }
    ]);
  }

  generateSlots(start: string, end: string, duration: number, rest: number): UserDynamicSlots[] {
    let startTime = this.parseTime(start);
    const endTime = this.parseTime(end);
    let slots = [];

    while (startTime < endTime) {
      const endSlotTime = new Date(startTime.getTime() + duration * 60000);
      const restTime = new Date(endSlotTime.getTime() + rest * 60000);

      if (restTime > endTime) break;

      const slot: UserDynamicSlots = {
        _id: 0,
        user_id: 0,
        startTime: new Date(startTime), // create a copy
        startTimeRest: new Date(endSlotTime), // create a copy
        endTime: new Date(restTime), // create a copy
        duration: duration,
        rest: rest,
        reserved: true,
        user: {
          name: 'test user',
          company_name:'tets company',
        }
      };

      slots.push(slot);

      startTime = restTime; // Move to the end of the rest period for the next slot

    }

    return slots;
  }

  parseTime(time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }
}
