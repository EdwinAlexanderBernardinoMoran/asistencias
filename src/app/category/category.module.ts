import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditCategoryPageComponent } from './pages/create-edit-category-page/create-edit-category-page.component';
import { ListCategoryPageComponent } from './pages/list-category-page/list-category-page.component';
import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEditCategoryPageComponent,
    ListCategoryPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CategoryModule { }
