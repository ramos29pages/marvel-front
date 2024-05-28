import { Component } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FooterComponent, ChatComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
