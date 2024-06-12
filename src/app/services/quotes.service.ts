import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
}
