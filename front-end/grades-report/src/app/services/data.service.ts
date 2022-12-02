import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface } from '../login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000'

  constructor(public _http: HttpClient) { }

  postLogin(body: any): Observable<LoginInterface> {
    return this._http.post<LoginInterface>(`${this.url}/user/login`, body)
  }
}
