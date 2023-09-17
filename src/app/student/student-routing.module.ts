import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateStudentPageComponent } from './pages/create-student-page/create-student-page.component';
import { HomeStudentPageComponent } from './pages/home-student-page/home-student-page.component';
import { EditStudentPageComponent } from './pages/edit-student-page/edit-student-page.component';

const routes: Routes = [
  {
    path: 'create-student',
    component: CreateStudentPageComponent
  },
  {
    path: 'home-student',
    component: HomeStudentPageComponent
  },
  {
    path: 'student/:id',
    component: EditStudentPageComponent
  },
  {
    path: '**',
    redirectTo: 'create-student'
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class StudentRoutingModule { }
