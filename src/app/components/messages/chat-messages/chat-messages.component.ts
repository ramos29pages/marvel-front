import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [FooterComponent, ChatComponent],
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss'
})
export class ChatMessagesComponent {

}
