import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  validate(email: string): boolean {
    console.log(email);
    // this.http.post(
    //   'URL_BACK',
    //   {
    //     code
    //   }
    // );
    return true;
  }

  /*...
  validarCampos(): void {
    this.http.post('/api/validacion', datosValidar).subscribe({
      next: (value) => {
        this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
        this.formulario.setErrors(null); // Nuevo: establecemos los errores del formulario a null
      },
      error: (error) => {
        this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
        if (error.status === 400) {
          this.formulario.setErrors({ servidor: true }); // Nuevo: establecemos un error general en el formulario
        }
      },
    });
  }
  // */
}
