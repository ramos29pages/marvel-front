import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { ChatMessagesComponent } from './components/messages/chat-messages/chat-messages.component';
import { MessagesComponent } from './components/messages/messages.component';
import { QuotesComponent } from './components/quotes/quotes.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'messages/:id',
    component: ChatMessagesComponent,
  },
  {
    path: 'myquotes',
    component: QuotesComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  { path: '**', 
    redirectTo: '',
    pathMatch: 'full' 
  },
];
