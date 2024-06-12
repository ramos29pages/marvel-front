import { QuotesService } from './../../../../services/quotes.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Signal, WritableSignal, computed, input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent implements OnInit {
  @Input() year!: WritableSignal<number>;
  @Input() month!: WritableSignal<number>;
  _WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  calendar!: Signal<{ date: number, hasQuote: boolean }[][]>;
  monthName!: Signal<string>;
  quotes: { date: Date, quote: string }[] = [];

  constructor(private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.monthName = computed(() => this.showMonth(this.month()));
    this.loadQuotes();

    this.calendar = computed(() => this.createCalendar(this.year(), this.month(), this.quotes));
  }

  loadQuotes() {
    this.quoteService.getQuotes().subscribe(quotes => {
      this.quotes = quotes;
      this.createCalendar(this.year(), this.month(), this.quotes); // Actualiza el calendario con las citas
    });
  }

  createCalendar(year: number, month: number, quotes: { date: Date, quote: string }[]): { date: number, hasQuote: boolean }[][] {
    let mon = month - 1; // Los meses en JS son 0..11, no 1..12
    let d = new Date(year, mon);
    let table: { date: number, hasQuote: boolean }[][] = [];

    let row: { date: number, hasQuote: boolean }[] = [];
    // Espacios en la primera línea desde lunes hasta el primer día del mes
    for (let i = 0; i < this.getDay(d); i++) {
      row.push({ date: 0, hasQuote: false });
    }

    // <td> con el día  (1 - 31)
    while (d.getMonth() === mon) {
      const day = d.getDate();
      const hasQuote = quotes.some(quote =>
        quote.date.getFullYear() === year &&
        quote.date.getMonth() === mon &&
        quote.date.getDate() === day
      );
      row.push({ date: day, hasQuote });

      if (this.getDay(d) % 7 === 6) { // domingo, último día de la semana --> nueva línea
        table.push(row);
        row = [];
      }

      d.setDate(d.getDate() + 1);
    }

    // Espacios después del último día del mes hasta completar la última línea
    if (this.getDay(d) !== 0) {
      for (let i = this.getDay(d); i < 7; i++) {
        row.push({ date: 0, hasQuote: false });
      }
    }

    if (row.length > 0) {
      table.push(row);
    }

    return table;
  }

  getDay(date: Date): number { // obtener el número de día desde 0 (lunes) a 6 (domingo)
    let day = date.getDay();
    if (day === 0) day = 7; // hacer domingo (0) el último día
    return day - 1;
  }

  showMonth(position: number): string {
    const months = [
      { position: 1, name: 'Enero' }, { position: 2, name: 'Febrero' },
      { position: 3, name: 'Marzo' }, { position: 4, name: 'Abril' },
      { position: 5, name: 'Mayo' }, { position: 6, name: 'Junio' },
      { position: 7, name: 'Julio' }, { position: 8, name: 'Agosto' },
      { position: 9, name: 'Septiembre' }, { position: 10, name: 'Octubre' },
      { position: 11, name: 'Noviembre' }, { position: 12, name: 'Diciembre' }
    ];

    const month = months.find(m => m.position === position);
    return month ? month.name : '';
  }

  changeMonth(direction: number): void {
    const newMonth = this.month() + direction;
    if (newMonth < 1) {
      this.month.set(12);
      this.year.set(this.year() - 1);
    } else if (newMonth > 12) {
      this.month.set(1);
      this.year.set(this.year() + 1);
    } else {
      this.month.set(newMonth);
    }

    // Recargar las citas al cambiar de mes
    this.loadQuotes();
  }
}
