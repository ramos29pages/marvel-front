import { TokenService } from './../services/token.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return tokenService.isAuthenticated().pipe(
    map((authenticated) => {
      console.log(authenticated);
      if (authenticated) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      console.log('Print error');
      return of(false);
    })
  );
};
