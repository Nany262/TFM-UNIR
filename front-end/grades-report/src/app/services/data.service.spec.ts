import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DataService } from './data.service';
import { LoginInterface } from '../login/login.interface';

describe('DataService', () => {
  let service: DataService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call postLogin() and return the user status', () => {
    let mockResponseLogin: LoginInterface = {
      id: 1,
      email: "gloaocampo@liceoingles.edu.co",
      status: true,
      role: 'T'
    }
    const bodyRequest = {
      email: 'gloaocampo@liceoingles.edu.co',
      password: 'Test1234'
    }

    service.postLogin(bodyRequest).subscribe((user: any) => {
      expect(user).toEqual(mockResponseLogin)
    })

    const req = httpMock.expectOne('http://localhost:3000/user/login')
    expect(req.request.method).toBe('POST')
    req.flush(mockResponseLogin)
  })

  it('should call putLogout() and return the user status', () => {
    let mockResponseLogout: LoginInterface = {
      id: 1,
      email: "gloaocampo@liceoingles.edu.co",
      status: false,
      role: 'T'
    }
    const bodyRequest = {
      email: 'gloaocampo@liceoingles.edu.co',
    }

    service.putLogout(bodyRequest).subscribe((user: any) => {
      expect(user).toEqual(mockResponseLogout)
    })

    const req = httpMock.expectOne('http://localhost:3000/user/logout')
    expect(req.request.method).toBe('PUT')
    req.flush(mockResponseLogout)
  })

  it('should call getSubjects() and return the subjects users', () => {
    let mockResponseSubject = {
      subjects: [
        {
          id: 5,
          name: "Español",
          description: "Materia de español",
          progress: "Por Realizar",
          teacher_assigned: 1
        }
      ]
    }
    const id = 1
    service.getSubjects(id).subscribe((user: any) => {
      expect(user).toEqual(mockResponseSubject)
    })

    const req = httpMock.expectOne(`http://localhost:3000/subjects/${id}`)
    expect(req.request.method).toBe('GET')
    req.flush(mockResponseSubject)
  })

  it('should call getStudents() and return the students of the subject', () => {
    let mockResponseSubject = {
      students: [{
        firstName: "Alberto",
        lastName: "Cheveroni",
        id: "11125877742",
        percentaje: '50%',
        status: "En progreso"
      }]
    }
    const id = 1
    service.getStudents(id).subscribe((user: any) => {
      expect(user).toEqual(mockResponseSubject)
    })

    const req = httpMock.expectOne(`http://localhost:3000/students/${id}`)
    expect(req.request.method).toBe('GET')
    req.flush(mockResponseSubject)
  })

  it('should call getKnowledges() and return the knowledges', () => {
    let mockResponseKnowledge = {
      knowledges:
        [{
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
    }
    const id = 1
    service.getKnowledges().subscribe((user: any) => {
      expect(user).toEqual(mockResponseKnowledge)
    })

    const req = httpMock.expectOne(`http://localhost:3000/grades/knowledges`)
    expect(req.request.method).toBe('GET')
    req.flush(mockResponseKnowledge)
  })

  it('should call getRubric() and return the rubric to the grades', () => {
    let mockResponseKnowledge = {
      id: "1",
      description: "Buena estructura textual",
      grade: null,
    }
    const id = 1
    service.getKnowledges().subscribe((user: any) => {
      expect(user).toEqual(mockResponseKnowledge)
    })

    const req = httpMock.expectOne(`http://localhost:3000/grades/knowledges`)
    expect(req.request.method).toBe('GET')
    req.flush(mockResponseKnowledge)
  })

  it('should call postIndicator()', () => {
    expect(false).toBeFalse()
  })

  it('should call deleteIndicator()', () => {
    expect(false).toBeFalse()
  })

  it('should call savePartiallyGrades()', () => {
    expect(false).toBeFalse()
  })

  it('should call sendGrades()', () => {
    expect(false).toBeFalse()
  })
});
