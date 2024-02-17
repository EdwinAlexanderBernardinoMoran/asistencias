import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditCantonPageComponent } from './pages/create-edit-canton-page/create-edit-canton-page.component';
import { ListCantonPageComponent } from './pages/list-canton-page/list-canton-page.component';
import { CantonRoutingModule } from './canton-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditCantonPageComponent,
    ListCantonPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CantonRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CantonModule { }
