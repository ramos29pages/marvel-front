import { TokenService } from './../services/token.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

 const tokenService = inject(TokenService);
 const router = inject(Router);

 tokenService.isAuthenticated.subscribe({
  next: (token) =>{
    if(!token){
      router.navigate(['/errror']);
    }
  }
 });


  return true;
};
