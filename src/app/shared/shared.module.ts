import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { StudentRoutingModule } from '../student/student-routing.module';
import { TableGenericComponent } from './components/table-generic/table-generic.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    TableGenericComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    LoaderComponent,
    TableGenericComponent
  ]
})
export class SharedModule { }
