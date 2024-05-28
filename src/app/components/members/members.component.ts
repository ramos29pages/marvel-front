import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [FooterComponent, UserComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {

}
