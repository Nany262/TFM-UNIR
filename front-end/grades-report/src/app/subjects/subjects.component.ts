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
  id: string
  subjects: SubjectInterface[] = []

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.email = this.cookieService.get('email');
    this.id = this.cookieService.get('id')
  }

  ngOnInit() {
    if (this.email != '' && this.id != '') {
      this.dataService.getSubjects(this.id).subscribe((res) => {
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
    this.dataService.putLogout(bodyLogout).subscribe((res) => {
      console.log(res);
      this.cookieService.deleteAll();
      this.router.navigateByUrl('/');
    })
  }

  redirectStudents(idSubject: number) {
    this.cookieService.set('idSubject', idSubject.toString());
    this.router.navigateByUrl('/estudiantes');
  }
}
