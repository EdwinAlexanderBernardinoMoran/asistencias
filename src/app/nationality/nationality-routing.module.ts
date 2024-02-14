import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditNationalityPageComponent } from './pages/create-edit-nationality-page/create-edit-nationality-page.component';
import { ListNationalityPageComponent } from './pages/list-nationality-page/list-nationality-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-nationality',
        component: CreateEditNationalityPageComponent
      },
      {
        path: 'list',
        component: ListNationalityPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditNationalityPageComponent
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
export class NationalityRoutingModule { }
