import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
