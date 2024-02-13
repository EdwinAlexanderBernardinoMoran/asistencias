import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentPageComponent } from './pages/create-department-page/create-department-page.component';
import { HomeDepartmentPageComponent } from './pages/home-department-page/home-department-page.component';
import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-department',
        component: CreateDepartmentPageComponent
      },
      {
        path: 'list',
        component: HomeDepartmentPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateDepartmentPageComponent
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
