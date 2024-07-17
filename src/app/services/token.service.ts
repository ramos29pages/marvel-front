import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CURRENT_TOKEN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(){
    const token = this.getToken();
    if (token){this.updateToken(true)};
  }

  setToken(token : string){
    this.updateToken(true);
    localStorage.setItem( CURRENT_TOKEN, token);
  }

  getToken(): string | null {
    this.setToken('TESTS');
    return localStorage.getItem(CURRENT_TOKEN) || null;
  }

  updateToken(status : boolean){
    this.isAuthenticated.next(status);
  }

  removeToken(){
    this.updateToken(false);
    return localStorage.removeItem(CURRENT_TOKEN);
  }
}
