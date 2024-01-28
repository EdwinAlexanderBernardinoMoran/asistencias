import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateStudentPageComponent } from './pages/create-student-page/create-student-page.component';
import { HomeStudentPageComponent } from './pages/home-student-page/home-student-page.component';
import { EditStudentPageComponent } from './pages/edit-student-page/edit-student-page.component';
import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-student',
        component: CreateStudentPageComponent
      },
      {
        path: 'list',
        component: HomeStudentPageComponent
      },
      {
        path: 'student/:id',
        component: EditStudentPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
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
