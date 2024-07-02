import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from '../footer/footer.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { Router } from '@angular/router';
import {UserMessage} from '../../models/LastMessage';
import {IUser} from '../../models/user';
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

  company: string = 'Mission Recycling APP';
  sloganToChatSection: string = 'Send and receive messages to all users.';
  title : string = 'Chat';

  user1: IUser = {
    _id: 1,
    name: 'Ramosdev',
    surname: 'Ramos Dev',
    flag: 'co',
    company: 'Mission Recycling',
    workPosition: 'developer',
    profileURL: 'https://robohash.org/ramosdev',
    categories: [ 'plastic', 'non-ferrous-metals'],
    country: 'colombia'

  };

  user2: IUser = {
    _id: 1,
    name: 'karen',
    surname: 'Rosero',
    flag: 'co',
    company: 'Mission Recycling',
    workPosition: 'developer',
    profileURL: 'https://robohash.org/ramosdev',
    categories: [ 'plastic', 'non-ferrous-metals'],
    country: 'colombia'
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
}
