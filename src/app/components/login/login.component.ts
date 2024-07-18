import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';

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
  loginUsernameFailed = false;
  userValidationError = 'Username does not exist';
  userValidation = false
  passwordValidationError = 'Password is incorrect';
  passwordValidation = false
  loginPasswordFailed = false;
  errorUsername = 'Username is required';
  errorPassword = 'Password is required';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  goToDash() {

    if (this.user?.invalid){
      this.loginUsernameFailed = true;
    }

    if (this.user?.invalid){
      this.loginPasswordFailed = true;
    }

    if (this.user?.valid) {
      this.userValidation = !this.validateUsername(this.user?.value);
    }

    if (this.password?.valid) {
      this.passwordValidation = !this.validatePassword(this.password?.value);
    }


    // if (this.password?.valid && this.validatePassword(this.password?.value)) {
    //   this.loginPasswordFailed = false;
    // }

    if (
      this.form.valid &&
      this.user?.valid &&
      this.password?.valid &&
      this.validateUsername(this.user?.value) &&
      this.validatePassword(this.password?.value)
    ) {
      this.router.navigate(['dashboard/home']);
    }
  }

  validateUsername(value: string): boolean {
    if (this.user?.value == 'test') {
      return true;
    } else {
      return false;
    }
  }

  validatePassword(value: string): boolean {
    if (this.password?.value == 'test') {
      return true;
    } else {
      return false;
    }
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
