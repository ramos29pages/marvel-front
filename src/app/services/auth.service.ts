import { ILogin, ILoginResponse } from './../models/auth.models';
import { TokenService } from './token.service';
import { api } from './../constants/constants';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private tokenService: TokenService, private http: HttpClient ) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<ILoginResponse>(api.AuthLoginEndpoint, { username, password })
      .pipe(
        map(response => {
          if (response.status && response.token) {
            // localStorage.setItem('authToken', response.token);
            this.tokenService.setToken(response.token);
            console.log('Login successful');
            return true;
          } else {
            console.error('Login failed:', response.message);
            return false;
          }
        })
      );
  }

  validateUsername(username: string): Observable<boolean> {
    return this.http.post<{ status: boolean, message: string }>(api.AuthValidateUsernameEndpoint, { username })
      .pipe(
        map(response => response.status)
      );
  }
}
