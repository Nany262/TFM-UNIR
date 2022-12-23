import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  emailTeacher: string
  idTeacher: string

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
  }

}
