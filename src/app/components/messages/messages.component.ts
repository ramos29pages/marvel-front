import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from '../footer/footer.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { Router } from '@angular/router';
import {UserMessage, User} from './UserMessage';
import { CommonModule } from '@angular/common';
import { LastMessageComponent } from './last-message/last-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [ChatMessagesComponent, FooterComponent, CommonModule, LastMessageComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})

export class MessagesComponent {

  company: string = 'MISSION RECICLYNG';
  sloganToChatSection: string = 'MISSION RECICLYNG';
  title : string = 'Chat';

  user1: User = {
    id:1,
    name: "Daniel Ramos",
    companyName: "Mission Recycling",
    workPosition: "Developer",
    country: "Colombia",
  };

  user2: User = {
    id:2,
    name: "Karen Rosero",
    companyName: "Corporacion Nuñez",
    workPosition: "Manager",
    country: "Chile",
  };

  messages : UserMessage[] = [{
    id: 1,
    user: this.user1,
    lastHour: "8:15am",
    lastMessage: "Lorem Ipsum",
    imgURL: "https://robohash.org/alberto"
  },{
    id: 2,
    user: this.user2,
    lastHour: "8:35am",
    lastMessage: "lorem Ipsum",
    imgURL: "https://robohash.org/hernestico"
  }];

  constructor(private router: Router) {}


  selectConversation(name: string): void {
    this.router.navigate(['/messages', name]);
  }
}
