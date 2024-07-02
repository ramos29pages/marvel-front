import { Component, Input } from '@angular/core';
import { UserMessage } from '../../../models/LastMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-message',
  standalone: true,
  imports: [],
  templateUrl: './last-message.component.html',
  styleUrl: './last-message.component.scss'
})
export class LastMessageComponent {
  @Input() ms !: UserMessage;

  constructor(private router : Router){}


  selectConversation(name: string): void {
    console.log(`Conversation with ${name} selected`);
    this.router.navigate(['/messages', name]);
  }
}
