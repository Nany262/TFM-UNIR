import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
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
    let alertMessage = 'Por favor ingrese los campos obligatorios (*) faltantes'
    fixture.nativeElement.querySelector('button').click();
    expect(fixture.nativeElement.querySelector('alert-form').text).toEqual(alertMessage)
    expect(component.login()).toEqual('invalid_form');
  });

  it('should validate correct user and password', () => {
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: 'Test12345'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login()).toEqual('login_valid')

  });

  it('should deny access with incorrect user and password', () => {
    let alertMessage = 'Ooops! Correo o contraseña incorrectas, si olvidaste tu contraseña contacta con tu administrador';
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: 'invalidpass'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(fixture.nativeElement.querySelector('alert-form').text).toEqual(alertMessage)
    expect(component.login()).toEqual('login_invalid')
  });
});
