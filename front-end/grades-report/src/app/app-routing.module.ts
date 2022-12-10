import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "materias", component: SubjectsComponent, pathMatch: "full" },
  { path: "profesores", component: TeachersComponent, pathMatch: "full" },
  { path: "estudiantes", component: StudentsComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
