import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditHamletPageComponent } from './pages/create-edit-hamlet-page/create-edit-hamlet-page.component';
import { ListHamletPageComponent } from './pages/list-hamlet-page/list-hamlet-page.component';
import { HamletRoutingModule } from './hamlet-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateEditHamletPageComponent,
    ListHamletPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HamletRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HamletModule { }
