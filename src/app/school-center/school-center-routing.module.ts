import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditSchoolcenterPageComponent } from './pages/create-edit-schoolcenter-page/create-edit-schoolcenter-page.component';
import { ListSchoolcenterPageComponent } from './pages/list-schoolcenter-page/list-schoolcenter-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-schoolcenter',
        component: CreateEditSchoolcenterPageComponent
      },
      {
        path: 'list',
        component: ListSchoolcenterPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditSchoolcenterPageComponent
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
export class SchoolCenterRoutingModule { }
