import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditCategoryPageComponent } from './pages/create-edit-category-page/create-edit-category-page.component';
import { ListCategoryPageComponent } from './pages/list-category-page/list-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-category',
        component: CreateEditCategoryPageComponent
      },
      {
        path: 'list',
        component: ListCategoryPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditCategoryPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CategoryRoutingModule { }
