import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentPageComponent } from './pages/create-department-page/create-department-page.component';
import { HomeDepartmentPageComponent } from './pages/home-department-page/home-department-page.component';
import { EditDepartmentPageComponent } from './pages/edit-department-page/edit-department-page.component';

const routes: Routes = [
  {
    path: 'create-department',
    component: CreateDepartmentPageComponent
  },
  {
    path: 'home-department',
    component: HomeDepartmentPageComponent
  },
  {
    path: 'department/:id',
    component: EditDepartmentPageComponent
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
