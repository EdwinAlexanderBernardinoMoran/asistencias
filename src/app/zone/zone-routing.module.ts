import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditZonePageComponent } from './pages/create-edit-zone-page/create-edit-zone-page.component';
import { ListZonePageComponent } from './pages/list-zone-page/list-zone-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-zone',
        component: CreateEditZonePageComponent
      },
      {
        path: 'list',
        component: ListZonePageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditZonePageComponent
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
export class ZoneRoutingModule { }
