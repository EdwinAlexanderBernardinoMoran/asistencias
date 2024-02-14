import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentPageComponent } from './pages/list-department-page/list-department-page.component';
import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditDepartmentPageComponent } from './pages/create-edit-department-page/create-edit-department-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-department',
        component: CreateEditDepartmentPageComponent
      },
      {
        path: 'list',
        component: ListDepartmentPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditDepartmentPageComponent
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
export class DepartmentRoutingModule { }
