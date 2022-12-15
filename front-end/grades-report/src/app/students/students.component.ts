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
  emailTeacher: string
  students: StudentsInterface[] = []
  idSubject: string
  nameSubject: string

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.emailTeacher = this.cookieService.get('email');
    this.idSubject = this.cookieService.get('idSubject');
    this.nameSubject = this.cookieService.get('nameSubject');
  }

  ngOnInit() {
    if (this.emailTeacher != '' && this.idSubject != '') {
      this.dataService.getStudents(this.idSubject).subscribe((res) => {
        this.students = res
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    const bodyLogout = {
      email: this.emailTeacher
    }
    this.cookieService.deleteAll();
    this.dataService.putLogout(bodyLogout).subscribe((res) => {
      this.router.navigateByUrl('/');
    })
  }
  redirectGrades(idStudent: string, nameStudent: string) {
    this.cookieService.set('idStudent', idStudent);
    this.cookieService.set('nameStudent', nameStudent);
    this.router.navigateByUrl('/saberes');
  }
}
