import { Component } from '@angular/core';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { CalendarComponent } from './calendar-host/calendar/calendar.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { CalendarHostComponent } from './calendar-host/calendar-host.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchCompanyComponent, ActiveUsersComponent, CalendarHostComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
