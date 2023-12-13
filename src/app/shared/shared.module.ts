import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
