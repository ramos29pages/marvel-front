import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import TimeSlot from '../../types/TimeSlot';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent implements OnInit {

  @Input() onlyReserved : boolean = false;
  meses: string[] = [
    'Junio 2024',
    'Julio 2024',
    'Agosto 2024',
    'Septiembre 2024',
    'Octubre 2024',
    'Noviembre 2024',
    'Diciembre 2024',
  ];

  timeSlots!: TimeSlot[];

  ngOnInit(): void {
    this.timeSlots =   [
      {
        membership: 'DINAMYC',
        startTime: "8:00AM",
        startTimeValue: 800,
        endTime: "8:15AM",
        endTimeValue: 815,
        status: 'reserved',
        reservedBy: 1,
        reservedWith: 2
      },
      {
        membership: 'DINAMYC',
        startTime: "8:20AM",
        startTimeValue: 820,
        endTime: "8:35AM",
        endTimeValue: 835,
        status: 'reserved',
        reservedBy: 1,
        reservedWith: 2
      },
      {
        membership: 'DINAMYC',
        startTime: "8:40AM",
        startTimeValue: 840,
        endTime: "8:55AM",
        endTimeValue: 855,
        status: 'on-hold',
        reservedBy: 1,
        reservedWith: 2
      }
    ]

    console.log('ONLY-RES3RVED:::',this.onlyReserved);
    console.log(new Date().getHours() + ':' + new Date().getMinutes());
  }

}
