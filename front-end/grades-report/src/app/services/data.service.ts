import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeInterface } from '../grades/knowledge.interface';
import { RubricInterface } from '../grades/rubric.interface';
import { LoginInterface } from '../login/login.interface';
import { StudentsInterface } from '../students/students.interface';
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

  putLogout(body: any) {
    return this._http.put<LoginInterface>(`${this.url}/user/logout`, body)
  }

  getSubjects(id: any) {
    return this._http.get<SubjectInterface[]>(`${this.url}/subjects/${id}`)
  }

  getStudents(idSubject: any) {
    return this._http.get<StudentsInterface[]>(`${this.url}/students/${idSubject}`)
  }

  getKnowledges() {
    return this._http.get<KnowledgeInterface[]>(`${this.url}/grades/knowledges`)
  }

  getRubric(idSubject: any) {
    return this._http.get<RubricInterface[]>(`${this.url}/students/${idSubject}`)
  }
}
