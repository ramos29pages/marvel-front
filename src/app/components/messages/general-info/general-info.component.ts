import { Component } from '@angular/core';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {

  company: string = 'Mission Recycling APP';
  sloganToChatSection: string = 'Send and receive messages to all users.';
}
