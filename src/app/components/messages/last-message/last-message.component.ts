import { HourFormatPipe } from './../../../shared/pipes/hour-format.pipe';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserMessage } from '../../../models/LastMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-message',
  standalone: true,
  imports: [CommonModule, HourFormatPipe],
  templateUrl: './last-message.component.html',
  styleUrl: './last-message.component.scss'
})
export class LastMessageComponent {
  @Input() ms !: UserMessage;
  @Input() messagesNoRead: number = 0;
  @Output() selected = new EventEmitter<number>();


  constructor(private router : Router){}


  selectConversation(idSelected: number): void {
    console.log(idSelected);
    this.selected.emit(idSelected);
    //
  }
}
