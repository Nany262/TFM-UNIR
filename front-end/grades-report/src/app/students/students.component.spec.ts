import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';

import { StudentsComponent } from './students.component';
import { StudentsInterface } from './students.interface';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let service: DataService;
  let cookieService: CookieService;
  let mockResponse: StudentsInterface[] = [{
    firstName: "Alberto",
    lastName: "Cheveroni",
    id: "11125877742",
    percentaje: '50%',
    status: "En progreso"
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    service = component.dataService;
    cookieService = component.cookieService;
    fixture.detectChanges();
  });

  it('should create the students component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject DataService', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(fixture.nativeElement.querySelector('mat-toolbar').innerText).toContain('Estudiantes');
  });

  it('should list the students', () => {
    spyOn(service, 'getStudents').and.returnValue(of(mockResponse))
    component.ngOnInit()
    expect(component.students).toEqual(mockResponse)
    //expect(false).toBeFalse()
  });

  it('should can sign out', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('exit_to_app');
    component.logout()
    expect(cookieService.get('email')).toEqual('')
  });

  it('should redirect to grades page', () => {
    cookieService.set('email', 'test@test.com');
    cookieService.set('id', '5')
    component.redirectGrades()
    expect(location.pathname).toBe('/estudiantes')
  });
});
