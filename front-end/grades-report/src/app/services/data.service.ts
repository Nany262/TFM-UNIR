import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeInterface } from '../interfaces/knowledge.interface';
import { RubricInterface } from '../interfaces/rubric.interface';
import { LoginInterface } from '../interfaces/login.interface';
import { StudentsInterface } from '../interfaces/students.interface';
import { SubjectInterface } from '../interfaces/subjects.interface';
import { TeacherInterface } from '../interfaces/teacher.interface';

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

  getRubric(idSubject: any, idKnowledge:string) {
    return this._http.get<RubricInterface[]>(`${this.url}/grades/rubric/${idSubject}/${idKnowledge}`)
  }

  getTeachers() {
    return this._http.get<TeacherInterface[]>(`${this.url}/teachers`)
  }
}
