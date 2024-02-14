import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEditDepartmentPageComponent } from './pages/create-edit-department-page/create-edit-department-page.component';
import { ListDepartmentPageComponent } from './pages/list-department-page/list-department-page.component';



@NgModule({
  declarations: [
    CreateEditDepartmentPageComponent,
    ListDepartmentPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DepartmentModule { }
