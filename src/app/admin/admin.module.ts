import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from '../student/student-routing.module';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentRoutingModule
  ]
})
export class AdminModule { }
