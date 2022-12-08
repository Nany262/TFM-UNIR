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
  subjects: SubjectInterface[] = [{
    name: "Informatica",
    description: "En informática, una clase es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido.",
    progress: 'En proceso',
    image: './asset'
  }, {
    name: "Investigación",
    description: "Como vemos, la investigación científica presenta varios aspectos a tener en cuenta.",
    progress: 'Por Realizar',
    image: './asset'
  },
  {
    name: "Programación",
    description: "En informática, una clase es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido.",
    progress: 'Completado',
    image: './asset'
  }]

  constructor(private cookieService: CookieService,
    public dataService: DataService,) {
    this.email = this.cookieService.get('email');
  }

  ngOnInit() { }
}
