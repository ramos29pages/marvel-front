import { Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-calendar-host',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './calendar-host.component.html',
  styleUrl: './calendar-host.component.scss'
})
export class CalendarHostComponent {

  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();

  ngOnInit(): void {
    const now = new Date();
    this.selectedMonth = now.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    this.selectedYear = now.getFullYear();
    console.log(this.selectedMonth);
    console.log(this.selectedYear);
  }

  prevMonth(): void {
    if (this.selectedMonth === 1) {
      this.selectedMonth = 12;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
  }

  nextMonth(): void {
    if (this.selectedMonth === 12) {
      this.selectedMonth = 1;
      this.selectedYear++;
    } else {
      this.selectedMonth ++;
    }
  }

}
