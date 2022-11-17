import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {path: '',redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentsListComponent},
  {path: 'students/:id',component: StudentDetailsComponent},
  {path: 'add', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
