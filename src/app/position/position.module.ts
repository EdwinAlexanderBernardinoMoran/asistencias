import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditPositionPageComponent } from './pages/create-edit-position-page/create-edit-position-page.component';
import { ListPositionPageComponent } from './pages/list-position-page/list-position-page.component';
import { PositionRoutingModule } from './position-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditPositionPageComponent,
    ListPositionPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PositionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PositionModule { }
