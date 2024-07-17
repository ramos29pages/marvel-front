import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserMessage } from '../../../models/LastMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-message.component.html',
  styleUrl: './last-message.component.scss'
})
export class LastMessageComponent {
  @Input() ms !: UserMessage;
  messagesNoRead = 22;

  constructor(private router : Router){}


  selectConversation(name: string): void {
    console.log(`Conversation with ${name} selected`);
    this.router.navigate(['dashboard/messages', name]);
  }
}
