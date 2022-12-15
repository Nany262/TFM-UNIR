import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoganimation',
  templateUrl: './dialoganimation.component.html',
  styleUrls: ['./dialoganimation.component.css']
})
export class DialoganimationComponent {
  constructor(public dialogRef: MatDialogRef<DialoganimationComponent>) {}
}
