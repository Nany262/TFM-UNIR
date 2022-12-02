import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  invalidLogin = '';

  constructor(private formBuilder: FormBuilder, private dataService: DataService, public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  };

  onSubmit(userData: any) {
    this.email = userData.email;
    this.password = userData.password;
    this.validateDataLogin()
    this.loginForm.reset();
  };

  validateDataLogin() {
    const bodyLogin = {
      email: this.email,
      password: this.password
    }

    this.dataService.postLogin(bodyLogin).subscribe({
      next: res => {
        this.invalidLogin = ''
        this.router.navigateByUrl('/materias');
      }
      , error: e => {
        this.invalidLogin = '¡Ooops! Correo o contraseña incorrectas, si olvidaste tu contraseña contacta con tu administrador';
      }
    })
  }

  getErrorMessage() {
    let missingFields = 'Campo obligatorio (*)'
    let invalidFormat = 'No es un email valido'
    if (this.email.hasError('required')) {
      return missingFields;
    }

    return this.email.hasError('email') ? invalidFormat : '';
  }
}
