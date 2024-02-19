import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditZonePageComponent } from './pages/create-edit-zone-page/create-edit-zone-page.component';
import { ListZonePageComponent } from './pages/list-zone-page/list-zone-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZoneRoutingModule } from './zone-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditZonePageComponent,
    ListZonePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ZoneRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ZoneModule { }
