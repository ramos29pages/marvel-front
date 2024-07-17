import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  hide = false;
  eye = 'fa-solid fa-eye';
  passtype = 'password';

  constructor( private activatedRoute: ActivatedRoute, private router: Router){

  }

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  joinTheEvent() {
    window.open('https://missionrecycling.org/join-the-event/', '_blank');
  }

  forgotPassword() {
    this.router.navigate(['reset-password']);
  }

  showPassword() {
    this.hide = this.hide ? false : true;
    this.eye = this.hide ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    this.passtype = this.passtype == 'password' ? 'text' : 'password';
  }

  onSubmit() {
    if (this.form.invalid) {
      // Aquí puedes manejar el caso cuando el formulario es inválido.
      alert('Por favor, completa todos los campos obligatorios.');
    }
    // Aquí manejas el envío del formulario cuando es válido.
  }
}
