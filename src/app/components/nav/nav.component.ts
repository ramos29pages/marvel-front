import { CommonModule } from '@angular/common';
import { TokenService } from './../../services/token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  protected username : string = '@username';
  protected imageProfileURL: string = 'https://robohash.org/ramos';
  protected logoURL: string = '../../';
  protected isAutenticated$;

  constructor(private tokenService: TokenService ){
    this.isAutenticated$ = tokenService.isAuthenticated;
  }
}
