import { CodeService } from './../../services/code.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Component, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss',
})
export class ForgotComponent {
  hide = false;
  eye = 'fa-solid fa-eye';
  passtype = 'password';
  buttontext = 'Restablecer contraseña';

  canReset = false;
  codeSend: boolean = false;
  codeValid: boolean = false;

  formEmail: FormGroup;
  emailControl: FormControl;
  codeControl: FormControl;

  // formReset: FormGroup;
  // passControl: FormControl;
  // repassControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private codeService: CodeService,
    private emailService: EmailService,
    private router: Router
  ) {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.codeControl = new FormControl('', Validators.required);

    // this.passControl = new FormControl('', Validators.required);
    // this.repassControl = new FormControl('', Validators.required);

    this.formEmail = this.fb.group({
      email: this.emailControl,
      pass: this.codeControl,
    });

    // this.formReset = this.fb.group({
    //   password: this.passControl,
    //   repassword: this.repassControl,
    // });
  }

  async resetPassword() {
    console.log('[INFO ]',this.formEmail);

    if (this.emailControl.valid) {
      this.codeSend = this.emailService.validate(this.emailControl.value);
      this.buttontext = 'Confirmar cambio';
    }

    console.log('CODE CONTROL VALID:: ',this.codeControl.value, );

    if (
      this.emailControl.valid &&
      this.codeSend &&
      this.codeControl.valid &&
      this.buttontext == 'Confirmar cambio'
    ) {
      alert('No se han guardado los cambios.');
      this.formEmail.reset();
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
      console.log(this.formEmail.value);
      // this.changePassword();
    }
  }

  changePassword() {
    if (this.formEmail.valid) {
      alert('Changed Password');
      this.router.navigate(['login']);
    }
  }

  goHome(){
    alert('Resend Code');
  }

  backToLogin() {
    this.router.navigate(['login']);
  }

  showPassword() {
    this.hide = this.hide ? false : true;
    this.eye = this.hide ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    this.passtype = this.passtype == 'password' ? 'text' : 'password';
  }

   /*
   validarCampos(): void {
    this.cargandoValidacion = true; // Nuevo: establecemos la variable de carga a true
    const datosValidar = { // Creamos el objeto con los datos a validar
      nombre: this.nombreControl.value,
      email: this.emailControl.value,
      telefono: this.telefonoControl.value
    };
    this.http.post('/api/validacion', datosValidar)
      .subscribe(
        () => {
          this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
          this.formulario.setErrors(null); // Nuevo: establecemos los errores del formulario a null
        },
        (error) => {
          this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
          if (error.status === 400) {
   this.formulario.setErrors({ servidor: true }); // Nuevo: establecemos un error general en el formulario
          }
        }
      );
  }
  */
}
