import { Component } from '@angular/core';
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
  subjects: SubjectInterface[] = [];
  constructor(private cookieService: CookieService,
    public dataService: DataService,) {
    this.email = this.cookieService.get('email');
  }

  ngOnInit() { }
}
