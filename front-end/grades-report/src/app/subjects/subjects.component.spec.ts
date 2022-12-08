import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { SubjectInterface } from './subjects.interface';
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

describe('SubjectsComponent', () => {
  let component: SubjectsComponent;
  let fixture: ComponentFixture<SubjectsComponent>;
  let service: DataService;
  let mockResponse: SubjectInterface[] = [{
    name: "Informatica",
    description: "En informática, una clase es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido.",
    progress: 'En proceso',
    image: './asset'
  }, {
    name: "Investigación",
    description: "Como vemos, la investigación científica presenta varios aspectos a tener en cuenta.",
    progress: 'Por Realizar',
    image: './asset'
  },
  {
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
        MatToolbarModule
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
    expect(component.subjects).toEqual(mockResponse)
  });

  it('should can sign out', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('exit_to_app');
  });

});
