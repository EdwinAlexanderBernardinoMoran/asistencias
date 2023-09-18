import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( modulo => modulo.studentModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then( modulo => modulo.DepartmentModule )
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
