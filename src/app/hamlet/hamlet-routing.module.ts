import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditHamletPageComponent } from './pages/create-edit-hamlet-page/create-edit-hamlet-page.component';
import { ListHamletPageComponent } from './pages/list-hamlet-page/list-hamlet-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-hamlet',
        component: CreateEditHamletPageComponent
      },
      {
        path: 'list',
        component: ListHamletPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditHamletPageComponent
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
export class HamletRoutingModule { }

