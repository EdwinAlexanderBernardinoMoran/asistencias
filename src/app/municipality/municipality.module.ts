import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMunicipalityPageComponent } from './pages/list-municipality-page/list-municipality-page.component';
import { CreateEditMunicipalityPageComponent } from './pages/create-edit-municipality-page/create-edit-municipality-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MunicipalityRoutingModule } from './municipality-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListMunicipalityPageComponent,
    CreateEditMunicipalityPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MunicipalityRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MunicipalityModule { }
