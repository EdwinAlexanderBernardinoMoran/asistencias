import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditCantonPageComponent } from './pages/create-edit-canton-page/create-edit-canton-page.component';
import { ListCantonPageComponent } from './pages/list-canton-page/list-canton-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-canton',
        component: CreateEditCantonPageComponent
      },
      {
        path: 'list',
        component: ListCantonPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditCantonPageComponent
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
export class CantonRoutingModule { }
