import { GeneralInfoComponent } from './general-info/general-info.component';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from '../footer/footer.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, RouterOutlet } from '@angular/router';
import { UserMessage } from '../../models/LastMessage';
import { IUser } from '../../models/user';
import { CommonModule } from '@angular/common';
import { LastMessageComponent } from './last-message/last-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    ChatMessagesComponent,
    FooterComponent,
    CommonModule,
    LastMessageComponent,
    RouterOutlet,
    GeneralInfoComponent,
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent implements OnDestroy, OnInit {
  title: string = 'Chat';

  user1: IUser = {
    id: 1,
    name: 'Juan',
    surname: 'Perez',
    flag: 'co',
    company: 'Mission Recycling',
    workPosition: 'developer',
    profileURL: '../../../assets/images/ph2.jpg',
    categories: ['plastic', 'non-ferrous-metals'],
    country: 'colombia',
  };

  user2: IUser = {
    id: 2,
    name: 'Estiven',
    surname: 'Rosero',
    flag: 'co',
    company: 'Mission Recycling',
    workPosition: 'developer',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['plastic', 'non-ferrous-metals'],
    country: 'colombia',
  };

  messages: UserMessage[] = [
    {
      id: 1,
      userSender: this.user1,
      userReceiver: this.user1,
      createdDate : new Date(),
      message: 'Thank you 😊',
      read: true,
    },
    {
      id: 2,
      userSender: this.user2,
      userReceiver: this.user2,
      createdDate : new Date(),
      message: 'We can take a look at',
      read: false,
    },
    {
      id: 2,
      userSender: this.user1,
      userReceiver: this.user1,
      createdDate : new Date(),
      message: 'Yes, it´s perfect for me, we can to try some dee',
      read: true,
    },
    {
      id: 2,
      userSender: this.user2,
      userReceiver: this.user2,
      createdDate : new Date(),
      message: 'lorem Ipsum',
    },
  ];

  isMobile = false;
  selectedConversation: number = 0;


  constructor(private router: Router, media: MediaMatcher) {
    this.isMobile = media.matchMedia('(max-width: 1100px)').matches;
  }
  ngOnInit(): void {
    this.selectedConversation = 0;
    console.log(this.selectedConversation);
  }


  onConversationSelected(idReceiverSelected: number) {
    this.selectedConversation = idReceiverSelected;
    console.log('SELECTED::: ', this.selectedConversation);
    console.log('IS-MOBILE::: ', this.isMobile);

    if (this.isMobile) {
      this.router.navigate(['dashboard/mmessages', idReceiverSelected]);
    } else {
      this.router.navigate(['dashboard/messages/chat', idReceiverSelected]);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1000;
  }

  ngOnDestroy(): void {
    this.isMobile = false;
  }

}
