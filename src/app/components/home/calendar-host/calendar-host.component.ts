import { CalendarComponent } from './calendar/calendar.component';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
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
  imports: [CommonModule, FormsModule, CalendarComponent],
})
export class CalendarHostComponent {

  year: WritableSignal<number> = signal(new Date().getFullYear());
  month: WritableSignal<number> = signal(new Date().getMonth() + 1);

}
