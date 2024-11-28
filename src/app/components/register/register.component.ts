import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    id: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  errorName = 'El nombre es obligatorio y debe tener al menos 3 caracteres';
  errorId = 'La identificación es obligatoria y debe ser numérica';
  errorEmail = 'Debe ingresar un correo válido';

  constructor(private router: Router, private userService : UserService) {}

  get name() {
    return this.form.get('name');
  }

  get id() {
    return this.form.get('id');
  }

  get email() {
    return this.form.get('email');
  }

  registerUser() {
    if (this.form.valid) {
      this.userService.registerUser(this.form.value).subscribe({
        next: (response: any) => {
          alert('Usuario registrado exitosamente, Recuerda usar el numero de identificacion como contraseña.');
          console.log('Respuesta del servidor:', response);
          this.form.reset();
          this.backToLogin();
        },
        error: (err) => {
          alert('Error al registrar el usuario: ' + err.error.message || 'Inténtalo más tarde');
          console.error('Error del servidor:', err);
        }
      });
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched(); // Muestra errores en todos los campos
    }
  }

  backToLogin() {
    this.router.navigate(['login']);
  }
}
