import { TokenService } from './../services/token.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('authToken');

  if (token) {
    return true; // El usuario está autenticado
  } else {
    router.navigate(['/login']); // Redirigir al login si no hay token
    return false;
  }
};
