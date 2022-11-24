import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormBuilder;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormBuilder()
  }

  login() {
    console.log('test');
    return 'test'
  }
}
