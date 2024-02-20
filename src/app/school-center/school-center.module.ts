import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditSchoolcenterPageComponent } from './pages/create-edit-schoolcenter-page/create-edit-schoolcenter-page.component';
import { ListSchoolcenterPageComponent } from './pages/list-schoolcenter-page/list-schoolcenter-page.component';
import { SchoolCenterRoutingModule } from './school-center-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditSchoolcenterPageComponent,
    ListSchoolcenterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SchoolCenterRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SchoolCenterModule { }
