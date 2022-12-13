import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { SubjectInterface } from './subjects.interface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  email: string
  idTeacher: string
  subjects: SubjectInterface[] = []

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.email = this.cookieService.get('email');
    this.idTeacher = this.cookieService.get('idTeacher')
  }

  ngOnInit() {
    if (this.email != '' && this.idTeacher != '') {
      this.dataService.getSubjects(this.idTeacher).subscribe((res) => {
        this.subjects = res
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    const bodyLogout = {
      email: this.email
    }
    this.cookieService.deleteAll();
    this.dataService.putLogout(bodyLogout).subscribe((res) => {      
      this.router.navigateByUrl('/');
    })
  }

  redirectStudents(idSubject: number, nameSubject: string) {
    this.cookieService.set('idSubject', idSubject.toString());
    this.cookieService.set('nameSubject', nameSubject);
    this.router.navigateByUrl('/estudiantes');
  }
}
