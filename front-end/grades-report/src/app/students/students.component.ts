import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { StudentsInterface } from './students.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: StudentsInterface[] = []

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
  }

  ngOnInit() { }
  logout() { }
  redirectGrades() { }
}
