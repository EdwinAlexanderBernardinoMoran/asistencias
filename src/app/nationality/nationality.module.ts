import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditNationalityPageComponent } from './pages/create-edit-nationality-page/create-edit-nationality-page.component';
import { ListNationalityPageComponent } from './pages/list-nationality-page/list-nationality-page.component';
import { NationalityRoutingModule } from './nationality-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditNationalityPageComponent,
    ListNationalityPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NationalityRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class NationalityModule { }
