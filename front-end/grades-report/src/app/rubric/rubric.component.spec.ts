import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RubricComponent } from './rubric.component';

describe('RubricComponent', () => {
  let component: RubricComponent;
  let fixture: ComponentFixture<RubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatDialogModule,
        MatTableModule
      ],
      declarations: [RubricComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a rubric', () => {
    expect(false).toBeFalse()
  });


  it('should can add a indicator', () => {
    expect(false).toBeFalse()
  });

  it('should can delete a indicator', () => {
    expect(false).toBeFalse()
  });

  it('the qualifications fields should be editables', () => {
    expect(false).toBeFalse()
  });
});
