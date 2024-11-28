import { ILogin, ILoginResponse } from './../models/auth.models';
import { TokenService } from './token.service';
import { API } from './../constants/constants';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private tokenService: TokenService, private http: HttpClient ) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<ILoginResponse>('http://localhost:3000/auth/login', { email, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            console.log('Login successful, token saved.');
            return true;
          } else {
            console.error('Login failed');
            return false;
          }
        })
      );
  }

  validateUsername(username: string): Observable<boolean> {
    return this.http.post<{ status: boolean, message: string }>(API.AuthValidateUsernameEndpoint, { username })
      .pipe(
        map(response => response.status)
      );
  }

  logout(): void {
    // Llamar al TokenService para cerrar sesión y luego redirigir al usuario al login
    this.tokenService.logout().subscribe(() => {
      window.location.href = '/login'; // Redirigir al login después de cerrar sesión
    });
  }

  isAuthenticated(): Observable<{ authenticated: boolean }> {
    // Delegar la verificación de autenticación al TokenService
    return this.tokenService.isAuthenticated();
  }

  refreshToken(): Observable<void> {
    // Delegar la operación de refresco de token al TokenService
    return this.tokenService.refreshToken();
  }


}
