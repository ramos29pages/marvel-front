import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
// import { api } from '../constants/constants'

@Injectable({
  providedIn: 'root'
})

export class ComicService {

  private apiUrl = 'http://localhost:3000/comics';

  // public comics : BehaviorSubject<Array<IUser>> = new BehaviorSubject<Array<IUser>>([]);
  comics !: IUser;

  constructor(private http: HttpClient) {
  }

  getComic(comicId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${comicId}`);
  }

  getUsers(): IUser {
    return this.comics;
  }
}
