import { ILogin, IResponse } from './../models/auth.models';
import { TokenService } from './token.service';
import { api } from './../constants/constants';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private tokenService: TokenService, private hppt: HttpClient ) { }

  onLogin(data: ILogin){
    return this.hppt
    .post<IResponse>(api.AuthEnpoint, data)
    .pipe( map( (response)=>{
      if(response){
        this.tokenService.setToken(response.access_token);
      }
      return response;
    }))
  }

}
