import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditSectionPageComponent } from './pages/create-edit-section-page/create-edit-section-page.component';
import { ListSectionPageComponent } from './pages/list-section-page/list-section-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionRoutingModule } from './section-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditSectionPageComponent,
    ListSectionPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SectionModule { }
