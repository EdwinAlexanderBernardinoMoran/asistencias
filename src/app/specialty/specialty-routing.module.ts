import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditSpecialtyPageComponent } from './pages/create-edit-specialty-page/create-edit-specialty-page.component';
import { ListSpecialtyPageComponent } from './pages/list-specialty-page/list-specialty-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-specialty',
        component: CreateEditSpecialtyPageComponent
      },
      {
        path: 'list',
        component: ListSpecialtyPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditSpecialtyPageComponent
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
export class SpecialtyRoutingModule { }
