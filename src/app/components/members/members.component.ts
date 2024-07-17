import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserComponent } from './user/user.component';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [FooterComponent, UserComponent, CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {

  userService = inject(UsersService);

  users : Array<IUser> = [];

  ngOnInit(): void {
    this.userService.users.subscribe(users =>{
      this.users = users;
    })
  }

}
