import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { CalendarComponent } from './calendar-host/calendar/calendar.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { CalendarHostComponent } from './calendar-host/calendar-host.component';
import { NavComponent } from '../nav/nav.component';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, MenuComponent, RouterOutlet, SearchCompanyComponent, ActiveUsersComponent, CalendarHostComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.setupSocketConnection();
  }


  setupSocketConnection() {
    const socket = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket']
    });
    console.log('You have logged in', socket.id);
    socket.emit('register', '2001');
    socket.emit('private_message', {
      receiverId: 1999,
      message: 'MENSAJE DESDE ANGULAR',
    });
  }
}
