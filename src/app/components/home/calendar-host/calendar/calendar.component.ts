import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  @Input() month !: number;
  @Input() year !: number;

  weeks !: number[][];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const date = new Date(this.year, this.month - 1, 1);
    console.log('DATE REGISTERED:::', date);
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    console.log('MONTH REGISTERED:::', daysInMonth);
    const startingDay = date.getDay();
    console.log('DAY REGISTERED:::',startingDay);

    this.weeks = [];
    let week = [];

    for (let i = 0; i < daysInMonth; i++) {
      const day = i + 1 - startingDay;

      if (day > 0 && day <= 7) {
        week.push(day);
      } else {
        if (week.length) {
          this.weeks.push(week);
        }
        week = [];
        week.push(day);
      }
    }

    if (week.length) {
      this.weeks.push(week);
    }
  }
}
