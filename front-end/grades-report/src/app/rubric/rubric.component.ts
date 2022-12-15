import { Component } from '@angular/core';

export interface RubricInterface {
  indicator:string,
  superior:string,
  high:string,
  medium:string,
  low:string
}

const ELEMENT_DATA: RubricInterface[] = [
  { indicator: 'Producir creaciones plásticas bidimensionales que permitan expresarse, identificando el entorno próximo y el imaginario', superior: ' ', high: ' ', medium: ' ', low: ' ' },
  { indicator: 'Interpretar e improvisar composiciones sencillas, utilizando las posibilidades sonoras de la voz, del cuerpo y de los instrumentos musicales, para expresar sentimientos o sonorizar situaciones', superior:  '', high: ' ', medium: ' ', low: ' ' },
  { indicator: ' Interpretar, utilizando el cuerpo como instrumento de expresión', superior: '', high: '', medium: '', low: '' },
];

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.css']
})
export class RubricComponent {
  displayedColumns: string[] = ['indicator', 'superior', 'high', 'medium', 'low'];
  dataSource = ELEMENT_DATA;
}
