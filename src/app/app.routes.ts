import { guestGuard } from './guards/guest.guard';
import { ErrorComponent } from './components/error/error.component';
import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { ChatMessagesComponent } from './components/messages/chat-messages/chat-messages.component';
import { MessagesComponent } from './components/messages/messages.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { authGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [authGuard]

  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [authGuard]

  },
  {
    path: 'messages/:id',
    component: ChatMessagesComponent,
    canActivate: [authGuard]

  },
  {
    path: 'myquotes',
    component: QuotesComponent,
    canActivate: [authGuard]

  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [authGuard]

  },
  {
    path: 'errror',
    component: ErrorComponent,
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
