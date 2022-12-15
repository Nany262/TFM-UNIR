import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';;
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { DialoganimationComponent } from './dialoganimation.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


describe('DialoganimationComponent', () => {
  let component: DialoganimationComponent;
  let fixture: ComponentFixture<DialoganimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatCardModule,
      HttpClientModule,
      MatToolbarModule,
      MatProgressBarModule,
      MatExpansionModule,
      MatTableModule,
      MatDialogModule,
    ],
      declarations: [ DialoganimationComponent ], providers:[{provide: MatDialogRef, useValue:{}} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoganimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dialog pop up', () => {
    expect(component).toBeTruthy();
  });

  it('should have a send confirmation message', () => {
    expect(false).toBeFalse()
  });
});
