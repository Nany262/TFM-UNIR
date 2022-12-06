import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../services/data.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = component.dataService;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject DataService', () => {
    expect(service).toBeTruthy();
  });

  it('should detect form is valid', () => {
    let alertMessage = 'Campo obligatorio (*)'
    component.loginForm.markAllAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-error').innerText).toEqual(alertMessage)
    expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('should validate correct user and password', () => {
    let email = fixture.componentInstance.loginForm.controls['email']
    let password = fixture.componentInstance.loginForm.controls['password']
    email.setValue('test@test.com')
    password.setValue('Test12345')
    fixture.nativeElement.querySelector('button').click();
    expect(fixture.nativeElement.querySelector('mat-error').innerText).toEqual('')
  });

  it('should deny access with incorrect user and password', () => {
    let alertMessage = 'Ooops! Correo o contraseña incorrectas, si olvidaste tu contraseña contacta con tu administrador';
    let email = fixture.componentInstance.loginForm.controls['email']
    let password = fixture.componentInstance.loginForm.controls['password']

    email.setValue('test@test.com')
    password.setValue('invalidpass')
    fixture.nativeElement.querySelector('button').click();
    expect(component.invalidLogin).toEqual('')
  });
});
