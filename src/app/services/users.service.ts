import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  protected users: string[] = [];

  constructor() {}
}
