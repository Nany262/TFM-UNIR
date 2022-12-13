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

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.emailTeacher = this.cookieService.get('email');
    this.idSubject = this.cookieService.get('idSubject');
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
    this.dataService.putLogout(bodyLogout).subscribe((res) => {
      console.log(res);
      this.cookieService.deleteAll();
      this.router.navigateByUrl('/');
    })
  }
  redirectGrades() {
    this.router.navigateByUrl('/saberes');
  }
}
