import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-messages',
  standalone: true,
  imports: [],
  templateUrl: './profile-messages.component.html',
  styleUrl: './profile-messages.component.scss'
})
export class ProfileMessagesComponent {

  @Input() name !: string;
  @Input() company !: string;
  @Input() workPosition !: string;
  @Input() countryFlag !: string;
  @Input() categories !: string[];
}
