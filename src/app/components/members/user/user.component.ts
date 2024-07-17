import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input() profileURL: string = 'https://robohash.org/unknown';
  @Input() name: string = 'Unknown Name';
  @Input() companyName: string = 'Unknown Company';
  @Input() isActive : boolean = true;

  get statusClass(): string{
    return this.isActive ? 'active' : 'inactive';
  }


}
