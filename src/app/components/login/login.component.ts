import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
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

  eye = 'fa-solid fa-eye';
  passtype = 'password';
  userValidationError = 'Username does not exist';
  passwordValidationError = 'Password is incorrect';
  errorUsername = 'Username is required';
  errorPassword = 'Password is required';
  hide = false;
  loginUsernameFailed = false;
  showUserValidationError = false;
  showPasswordValidationError = false;
  loginPasswordFailed = false;
  login = false;
  validUsername = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  goToDash() {
    if (this.form.valid) {
      this.validateLogin(this.user?.value, this.password?.value);
    } else {
      this.loginUsernameFailed = this.user?.invalid || false;
      this.loginPasswordFailed = this.password?.invalid || false;
    }
  }

  validateLogin(username: string, password: string): void {
    console.log('[DATA]', username, password);
    this.authService.login(username, password).subscribe({
      next: (isLoginSuccessful) => {
        if (isLoginSuccessful) {
          this.login = true;
          this.showPasswordValidationError = false;
          this.navigateToDashboard();
        } else {
          this.showPasswordValidationError = true;
        }
      },
      error: (error) => {
        console.error('LOGIN::', error);
        this.login = false;
        this.showPasswordValidationError = true;
      }
    });
  }

  navigateToDashboard() {
    // Aquí puedes manejar la navegación y la lógica de Socket.io
    console.log('Navigating to dashboard');
    this.router.navigate(['dashboard/comics']);
  }

  register() {
    this.router.navigate(['register']);
  }

  forgotPassword() {
    this.router.navigate(['reset-password']);
  }

  showPassword() {
    this.hide = this.hide ? false : true;
    this.eye = this.hide ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    this.passtype = this.passtype == 'password' ? 'text' : 'password';
  }
}
