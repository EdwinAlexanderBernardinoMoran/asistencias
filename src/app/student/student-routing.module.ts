import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditStudentPageComponent } from './pages/create-edit-student-page/create-edit-student-page.component';
import { ListStudentPageComponent } from './pages/list-student-page/list-student-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-student',
        component: CreateEditStudentPageComponent
      },
      {
        path: 'list',
        component: ListStudentPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditStudentPageComponent
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
