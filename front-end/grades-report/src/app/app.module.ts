import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GradesComponent } from './grades/grades.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RubricComponent } from './rubric/rubric.component';
import { MatTableModule } from '@angular/material/table';
import { DialoganimationComponent } from './dialoganimation/dialoganimation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
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
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SubjectsComponent,
    TeachersComponent,
    StudentsComponent,
    GradesComponent,
    RubricComponent,
    DialoganimationComponent,
    ReportsComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
