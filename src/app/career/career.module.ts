import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListCareerPageComponent } from './pages/list-career-page/list-career-page.component';
import { CreateEditCareerPageComponent } from './pages/create-edit-career-page/create-edit-career-page.component';
import { CareerRoutingModule } from './career-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListCareerPageComponent,
    CreateEditCareerPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CareerRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CareerModule { }
