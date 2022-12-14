import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  logout() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  constructor(public cookieService: CookieService,
    public dataService: DataService) { }
}
