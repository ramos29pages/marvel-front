import { API } from './../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {}

  isAuthenticated(): Observable<{ authenticated: boolean }> {
    // Hacemos una solicitud al backend para verificar si el usuario está autenticado.
    // La cookie con el token será enviada automáticamente con la solicitud.
    return this.http.get<{ authenticated: boolean }>(API.AuthCheckAuthEndpoint, { withCredentials: true });
  }

  refreshToken(): Observable<void> {
    // Solicita un nuevo token al backend usando el refresh token (enviado como cookie).
    return this.http.post<void>(API.AuthRefreshTokenEndpoint, {}, { withCredentials: true });
  }

  logout(): Observable<void> {
    // Enviar una solicitud al backend para cerrar sesión, lo que debería eliminar las cookies en el servidor.
    return this.http.post<void>(API.AuthLogoutEndpoint, {}, { withCredentials: true });
  }
}
