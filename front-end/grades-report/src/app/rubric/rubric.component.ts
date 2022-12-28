import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RubricInterface } from '../interfaces/rubric.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.css']
})
export class RubricComponent {
  displayedColumns: string[] = ['indicator', 'superior', 'high', 'medium', 'low', 'action'];
  indicators: RubricInterface[] = [];
  idStudent: string;
  teacherSelectedId: string;
  idSubject: string
  @Input() idKnowledge: string;

  constructor(public cookieService: CookieService,
    public dataService: DataService) {
    this.idStudent = this.cookieService.get('idStudent');
    this.teacherSelectedId = this.cookieService.get('teacherSelectedId');
    this.idSubject = this.cookieService.get('idSubject');
  }

  ngOnInit() {
    console.log(this.idKnowledge)
    this.dataService.getRubric(this.idSubject, this.idKnowledge).subscribe({
      next: (res) => {
        this.indicators = res
      }
    })
  }
}