import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-calendar-host',
  templateUrl: './calendar-host.component.html',
  styleUrls: ['./calendar-host.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CalendarHostComponent implements OnInit {

  selectedDate: Date = new Date();
  selectedMonth : number = 1;
  selectedYear : number = 2024;

  ngOnInit(): void {
    this.generateCalendar(this.selectedYear, this.selectedMonth);
  }

  updateDateInfo(): void {
    this.selectedMonth = this.selectedDate.getMonth();
    this.selectedYear = this.selectedDate.getFullYear();
    console.log(this.selectedYear);
  }

  generateCalendar(year: number, month: number): number[][] {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the month
  
    const calendar: number[][] = [];
    let week: number[] = [];
    let day = 1;
  
    // Add empty days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(0);
    }
  
    // Loop through all days in the month
    while (day <= daysInMonth) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
      day++;
    }
  
    // Add remaining empty days to complete the last week
    while (week.length < 7) {
      week.push(0);
    }
    calendar.push(week);

    console.log(calendar);
  
    return calendar;
  }
  

  prevMonth(): void {
    const currentMonth = this.selectedDate.getMonth();
    this.selectedDate = new Date(this.selectedDate.setMonth(currentMonth - 1));
    this.updateDateInfo();
  }

  nextMonth(): void {
    const currentMonth = this.selectedDate.getMonth();
    this.selectedDate = new Date(this.selectedDate.setMonth(currentMonth + 1));
    this.updateDateInfo();
  }
}
