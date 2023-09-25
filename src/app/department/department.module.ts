import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepartmentPageComponent } from './pages/create-department-page/create-department-page.component';
import { EditDepartmentPageComponent } from './pages/edit-department-page/edit-department-page.component';
import { HomeDepartmentPageComponent } from './pages/home-department-page/home-department-page.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { TableDepartmentComponent } from './components/table-department/table-department.component';



@NgModule({
  declarations: [
    CreateDepartmentPageComponent,
    EditDepartmentPageComponent,
    HomeDepartmentPageComponent,
    TableDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
  ]
})
export class DepartmentModule { }
