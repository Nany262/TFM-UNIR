import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { KnowledgeInterface } from '../interfaces/knowledge.interface';
import { DataService } from '../services/data.service';
import { StudentsInterface } from '../interfaces/students.interface';
import { SubjectInterface } from '../interfaces/subjects.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  emailTeacher: string
  idTeacher: string
  teacherSelectedId: string
  teacherSelectedName: string
  knowledges: KnowledgeInterface[] = []
  students: StudentsInterface[] = []
  subjects: SubjectInterface[] = []

  constructor(public cookieService: CookieService,
    public dataService: DataService,
    public router: Router) {
    this.emailTeacher = this.cookieService.get('email');
    this.idTeacher = this.cookieService.get('idTeacher');
    this.teacherSelectedId = this.cookieService.get('teacherSelectedId');
    this.teacherSelectedName = this.cookieService.get('teacherSelectedName');
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
    if (this.emailTeacher != '' && this.teacherSelectedId != '') {
      this.dataService.getKnowledges().subscribe((res) => {
        this.knowledges = res
      })

      this.dataService.getSubjects(this.teacherSelectedId).subscribe((res) => {
        for (let sub of res) {
          this.dataService.getStudents(sub.id).subscribe((res) => {
            for (let student of res) {
              if (this.students.every(i => i.id != student.id)) {
                this.students.push(student)
              }
            }
          })
        }
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
