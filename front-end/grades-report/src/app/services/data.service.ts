import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface } from '../login/login.interface';
import { SubjectInterface } from '../subjects/subjects.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000'

  constructor(public _http: HttpClient) { }

  postLogin(body: any): Observable<LoginInterface> {
    return this._http.post<LoginInterface>(`${this.url}/user/login`, body)
  }

  getSubjects() {
    return this._http.get<SubjectInterface[]>(`${this.url}/subject/:id`)
  }
}
