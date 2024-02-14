import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListStudentPageComponent } from './pages/list-student-page/list-student-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { CreateEditStudentPageComponent } from './pages/create-edit-student-page/create-edit-student-page.component';



@NgModule({
  declarations: [
    ListStudentPageComponent,
    CreateEditStudentPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class studentModule { }
