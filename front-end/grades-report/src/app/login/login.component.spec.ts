import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  //Debemos obtener una respuesta de ko si alguno de los campos viene vacío
  it('should detect form is valid', () => {
    let alertMessage = 'Ingrese los campos obligatorios (*) faltantes'
    component.loginForm.markAllAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-error').innerText).toEqual(alertMessage)
    expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('should validate correct user and password', () => {
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: 'Test12345'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.onSubmit(component.loginForm)).toEqual('login_valid')

  });

  it('should deny access with incorrect user and password', () => {
    let alertMessage = 'Ooops! Correo o contraseña incorrectas, si olvidaste tu contraseña contacta con tu administrador';
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: 'invalidpass'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(fixture.nativeElement.querySelector('mat-error').innerText).toEqual(alertMessage)
    expect(component.onSubmit(component.loginForm)).toEqual('login_invalid')
  });
});
