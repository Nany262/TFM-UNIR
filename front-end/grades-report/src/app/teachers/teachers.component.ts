import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { TeacherInterface } from './teacher.interface';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  emailTeacher: string
  idTeacher: string
  teachers: TeacherInterface[] = []

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.emailTeacher = this.cookieService.get('email');
    this.idTeacher = this.cookieService.get('idTeacher');
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

  ngOnInit() {
    if (this.emailTeacher != '' && this.idTeacher != '') {
      this.dataService.getTeachers().subscribe((res) => {
        this.teachers = res
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
