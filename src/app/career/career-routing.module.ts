import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditCareerPageComponent } from './pages/create-edit-career-page/create-edit-career-page.component';
import { ListCareerPageComponent } from './pages/list-career-page/list-career-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-career',
        component: CreateEditCareerPageComponent
      },
      {
        path: 'list',
        component: ListCareerPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditCareerPageComponent
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
export class CareerRoutingModule { }
