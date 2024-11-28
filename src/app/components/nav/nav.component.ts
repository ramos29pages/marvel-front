import { CommonModule } from '@angular/common';
import { TokenService } from './../../services/token.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  protected username : string = 'Daniel';
  protected imageProfileURL: string = '../../';
  protected logoURL: string = '../../';
  protected isAutenticated = true;

  constructor(private tokenService: TokenService, private router : Router){
    tokenService.isAuthenticated().subscribe(token =>{
      console.log(token);
    });
  }


  goFavorites() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('CURRENT_TOKEN');
    this.router.navigate(['login']);
  }
}
