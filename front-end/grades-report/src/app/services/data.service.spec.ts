import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DataService } from './data.service';
import { LoginInterface } from '../login/login.interface';

describe('DataService', () => {
  let service: DataService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockResponse: LoginInterface = {
    email: "gloaocampo@liceoingles.edu.co",
    status: true
  }

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
    const bodyRequest = {
      email: 'gloaocampo@liceoingles.edu.co',
      password: 'Test1234'
    }
    service.postLogin(bodyRequest).subscribe((user: any) => {
      expect(user).toEqual(mockResponse)
    })

    const req = httpMock.expectOne('http://localhost:3000/user/login')
    expect(req.request.method).toBe('POST')
    req.flush(mockResponse)
  })
});
