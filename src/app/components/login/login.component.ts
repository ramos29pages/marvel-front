import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { io } from 'socket.io-client';
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
    if (this.user?.invalid) {
      this.loginUsernameFailed = true;
    }

    if (this.user?.invalid) {
      this.loginPasswordFailed = true;
    }

    if (this.user?.valid) {
      this.validateUsername(this.user?.value);
    }

    if (this.password?.valid) {
      this.validateLogin(this.user?.value, this.password?.value);
    }

    // if (this.password?.valid && this.validatePassword(this.password?.value)) {
    //   this.loginPasswordFailed = false;
    // }

    if (
      this.form.valid &&
      this.user?.valid &&
      this.password?.valid &&
      this.showUserValidationError == false &&
      this.login
    ) {
      // this.router.navigate(['dashboard/home']);
      console.log('go to dash');

      const socket = io('http://localhost:3000');
      console.log('YOU HAVE LOGGED IN'), socket.id;

      socket.emit('register', '2001');

      socket.emit('private_message', {
        receiverId: 2000,
        message: 'MENSAJE DESDE ANGULAR',
      });
    }
  }

  validateUsername(value: string): void {
    if (value.length > 1) {
      this.authService.validateUsername(value).subscribe({
        next: (isValid) => {
          console.log('Userme is valid:: ', isValid);
          this.showUserValidationError = !isValid;
        },
        error: (error) => {
          console.error('VALIDATE-USERNAME-ERROR::', error);
          this.showUserValidationError = true;
        }
    });
    } else {
      this.showUserValidationError = true;
    }
  }

  validateLogin(username: string, password: string): void {
    this.validateUsername(username);

    if (this.showUserValidationError == false) {
      this.authService.login(username, password).subscribe({
        next:(isLoginSuccessful) => {
          if (!isLoginSuccessful) {
            this.showPasswordValidationError = true; // La contraseña es incorrecta
          }
          this.login = true;
          this.showPasswordValidationError = false; // La contraseña es correcta
          //danielramos9991@gmail.com
        },
        error: (error) => {
          console.error('LOGIN::', error);
          this.login = false;
          this.showPasswordValidationError = true;
        }
      });
    } else {
      console.error('Username validation failed.');
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
}
