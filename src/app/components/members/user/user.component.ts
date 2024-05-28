import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  protected profileURL: string = 'https://robohash.org/alberto';
  protected name: string = 'Daniel Ramos';
  protected companyName: string = 'Mission Recycling';
  protected isActive : boolean = true;

  get statusClass(): string{
    return this.isActive ? 'active' : 'inactive';
  }


}
