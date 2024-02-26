import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditPositionPageComponent } from './pages/create-edit-position-page/create-edit-position-page.component';
import { ListPositionPageComponent } from './pages/list-position-page/list-position-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-position',
        component: CreateEditPositionPageComponent
      },
      {
        path: 'list',
        component: ListPositionPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditPositionPageComponent
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
export class PositionRoutingModule { }
