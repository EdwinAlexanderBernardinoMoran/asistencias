import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentPageComponent } from './student/pages/home-student-page/home-student-page.component';
import { CreateStudentPageComponent } from './student/pages/create-student-page/create-student-page.component';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( modulo => modulo.studentModule)
  },
  {
    path: '**',
    redirectTo: 'student'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
