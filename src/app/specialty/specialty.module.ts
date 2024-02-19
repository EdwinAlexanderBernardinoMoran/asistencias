import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditSpecialtyPageComponent } from './pages/create-edit-specialty-page/create-edit-specialty-page.component';
import { ListSpecialtyPageComponent } from './pages/list-specialty-page/list-specialty-page.component';
import { SpecialtyRoutingModule } from './specialty-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditSpecialtyPageComponent,
    ListSpecialtyPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpecialtyRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SpecialtyModule { }
