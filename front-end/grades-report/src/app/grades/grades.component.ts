import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { KnowledgeInterface } from './knowledge.interface';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  emailTeacher: string
  knowledges: KnowledgeInterface[] = []
  idSubject: string
  nameSubject: string
  nameStudent: string
  idStudent: string

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.emailTeacher = this.cookieService.get('email');
    this.idSubject = this.cookieService.get('idSubject');
    this.nameSubject = this.cookieService.get('nameSubject');
    this.idStudent = this.cookieService.get('idStudent');
    this.nameStudent = this.cookieService.get('nameStudent');
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
    if (this.emailTeacher != '' && this.idSubject != '') {
      this.dataService.getKnowledges().subscribe((res) => {
        this.knowledges = res
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
