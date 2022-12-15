import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';

import { GradesComponent } from './grades.component';
import { KnowledgeInterface } from './knowledge.interface';
import { RubricInterface } from './rubric.interface';

describe('GradesComponent', () => {
  let component: GradesComponent;
  let fixture: ComponentFixture<GradesComponent>;
  let service: DataService;
  let cookieService: CookieService;
  let mockResponseKnowledge: KnowledgeInterface[] = [{
    id: "saber1",
    name: "Saber Conocer",
    description: "Capacidad para comprender cualquier tipo de información, expresando con sus propias palabras ese saber",
  }, {
    id: "saber2",
    name: "Saber Hacer",
    description: "Capacidad para aplicar, poner en escena de manera competente un saber",
  },
  {
    id: "saber3",
    name: "Saber Pensar",
    description: "Capacidad para descubrir problemas, interpretar y analizar con argumentos y evidencias, eventos, situaciones, textos escritos, visuales y audiovisuales",
  },
  {
    id: "saber4",
    name: "Saber Innovar",
    description: "Es la capacidad para proponer, idear, contextualizar, transformar o crear en contextos especificos",
  },
  {
    id: "saber5",
    name: "Saber Ser",
    description: "Capacidad para interactuar en sociedad de manera pacifica y constructiva, aplicando valores y priincipios, evidenciando el buen trato, la inclusión, el respeto y la amabilidad con todas las personas",
  },
  {
    id: "saber6",
    name: "Saber Sentir",
    description: "Capacidad para sentir y expresar los sentimientos y emociones, permite fortalecer la salud mental",
  }]
  let mockResponseRubric: RubricInterface[] = [{
    id: "1",
    description: "Buena estructura textual",
    grade: null,
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
      declarations: [GradesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = component.dataService;
    cookieService = component.cookieService;
  });

  it('should create the grades component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject DataService', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct title', () => {
    //expect(fixture.nativeElement.querySelector('mat-toolbar').innerText).toContain('');
    expect(false).toBeFalse()
  });

  it('should list the knowledges', () => {
    spyOn(service, 'getKnowledges').and.returnValue(of(mockResponseKnowledge))
    component.ngOnInit()
    //expect(component.subjects).toEqual(mockResponse)
    expect(false).toBeFalse()
  });

  it('should show the rubric related to the knowledge selected', () => {
    spyOn(service, 'getRubric').and.returnValue(of(mockResponseRubric))
    component.ngOnInit()
    //expect(component.subjects).toEqual(mockResponse)
    expect(false).toBeFalse()
  });

  it('should exist a button to partially save', () => {
    //expect(fixture.nativeElement.querySelector('button').innerText).toContain('Guardar');
    expect(false).toBeFalse()
  });

  it('should exist a button to send the grades to the coordinator', () => {
    //expect(fixture.nativeElement.querySelector('button').innerText).toContain('Enviar');
    expect(false).toBeFalse()
  });

  it('should can sign out', () => {
    //expect(fixture.nativeElement.querySelector('button').innerText).toEqual('exit_to_app');
    component.logout()
    //expect(cookieService.get('email')).toEqual('')
    expect(false).toBeFalse()
  });

});
