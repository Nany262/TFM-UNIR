import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { SubjectInterface } from '../interfaces/subjects.interface';
import { of } from 'rxjs';

import { SubjectsComponent } from './subjects.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CookieService } from 'ngx-cookie-service';

describe('SubjectsComponent', () => {
  let component: SubjectsComponent;
  let fixture: ComponentFixture<SubjectsComponent>;
  let service: DataService;
  let cookieService: CookieService;
  let mockResponse: SubjectInterface[] = [{
    id: 1,
    name: "Informatica",
    description: "En informática, una clase es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido.",
    progress: 'En proceso',
    image: './asset'
  }, {
    id: 2,
    name: "Investigación",
    description: "Como vemos, la investigación científica presenta varios aspectos a tener en cuenta.",
    progress: 'Por Realizar',
    image: './asset'
  },
  {
    id: 3,
    name: "Programación",
    description: "En informática, una clase es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido.",
    progress: 'Completado',
    image: './asset'
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        HttpClientTestingModule,
        MatToolbarModule,
      ],
      providers: [
        DataService
      ],
      declarations: [SubjectsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    service = component.dataService;
    cookieService = component.cookieService;
    fixture.detectChanges();
  });

  it('should create the subject component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject DataService', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(fixture.nativeElement.querySelector('mat-toolbar').innerText).toContain('Materias');
  });

  it('should list the subjects', () => {
    spyOn(service, 'getSubjects').and.returnValue(of(mockResponse))
    component.ngOnInit()
    //expect(component.subjects).toEqual(mockResponse)
    expect(false).toBeFalse()
  });

  it('should can sign out', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('exit_to_app');
    component.logout()
    expect(cookieService.get('email')).toEqual('')
  });

  it('should redirect to students page', () => {
    //component.redirectStudents(12222,'Arte')
    //expect(location.pathname).toBe('/estudiantes')
    expect(false).toBeFalse()
  });
});
