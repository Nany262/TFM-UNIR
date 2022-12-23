import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialoganimationComponent } from '../dialoganimation/dialoganimation.component';
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
    public router: Router,
    public dialog: MatDialog) {
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialoganimationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  redirectReport(idTeacher: number, firstName: string, lastName: string) {
    this.cookieService.set('teacherSelectedId', idTeacher.toString());
    this.cookieService.set('teacherSelectedName', firstName + lastName);
    this.router.navigateByUrl('/reportes');
  }

}
