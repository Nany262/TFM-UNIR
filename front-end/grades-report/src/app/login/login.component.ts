import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  };

  onSubmit(userData: any) {
    this.email = userData.email;
    this.password = userData.password;
    this.loginForm.reset();
    console.log('The login info is', userData)
    if (userData.email === '' || userData.password === '') {
      return "invalid_form"
    }
    else { return "login_valid" }
  };


  getErrorMessage() {
    let missingFields = 'Ingrese los campos obligatorios (*) faltantes'
    let wrongData = 'Ooops! Correo o contraseña incorrecta, si olvidaste tu contraseña contacta con tu administrador'
    let invalidFormat = 'No es un email valido'
    if (this.email.hasError('required')) {
      return missingFields;
    }

    return this.email.hasError('email') ? invalidFormat : '';
  }
}
