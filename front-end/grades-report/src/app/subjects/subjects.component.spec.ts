import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { SubjectInterface } from './subjects.interface';
import { of } from 'rxjs';

import { SubjectsComponent } from './subjects.component';

describe('SubjectsComponent', () => {
  let component: SubjectsComponent;
  let fixture: ComponentFixture<SubjectsComponent>;
  let service: DataService;
  let mockResponse: SubjectInterface[] = [{
    name: "Informatica",
    description: "Esta es una materia",
    progress: 'En proceso',
    image: './asset'
  }, {
    name: "Ciencia",
    description: "Esta es una materia",
    progress: 'En proceso',
    image: './asset'
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    expect(fixture.nativeElement.querySelector('mat-toolbar').innerText).toEqual('Materias');
  });

  it('should list the subjects', () => {
    spyOn(service, 'getSubjects').and.returnValue(of(mockResponse))
    component.ngOnInit()
    expect(component.subjects).toEqual(mockResponse)
  });

  it('should can sign out', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('Cerrar Sesión');
  });

});
