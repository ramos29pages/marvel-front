import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../models/user';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent implements OnInit {

  userService = inject(UsersService);

  users : Array<IUser> = [];

  ngOnInit(): void {
    this.userService.users.subscribe(users =>{
      this.users = users;
    })
  }


}
