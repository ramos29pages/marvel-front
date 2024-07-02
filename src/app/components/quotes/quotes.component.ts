import { HourFormatPipe } from './../../shared/pipes/hour-format.pipe';
import { MonthService } from './../../services/month.service';
import { QuotesService } from './../../services/quotes.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import TimeSlot from '../../models/TimeSlot';
import { UserDynamicSlots } from '../../models/slots';
import { FooterComponent } from '../footer/footer.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FooterComponent, HourFormatPipe],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent implements OnInit {

  @Input() onlyReserved : boolean = false;
  quotesService = inject(QuotesService);
  monthService = inject(MonthService);
  optionMonths: string[] = [];
  hour: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  slots: UserDynamicSlots[] = [];
  slotsView: UserDynamicSlots[][] = [];


  ngOnInit(): void {

    console.log('ONLY-RES3RVED:::',this.onlyReserved);
    console.log(new Date().getHours() + ':' + new Date().getMinutes());
    this.optionMonths = this.monthService.month;
    this.slots = this.quotesService.generateSlots('8:00', '20:00', 15, 5);
    console.log(this.slots);
    this.slotsView = this.convertirEnBidimensional(this.slots, 2);
    console.log(this.slotsView);
  }

  updateSeconds(second: number){
    this.hour.next(second);
  }


  convertirEnBidimensional(slots: UserDynamicSlots[], elementosPorSubarreglo: number): UserDynamicSlots[][] {
    let slotsView: UserDynamicSlots[][] = [];
    for (let i = 0; i < slots.length; i += elementosPorSubarreglo) {
      slotsView.push(slots.slice(i, i + elementosPorSubarreglo));
    }
    return slotsView;
  }



}
