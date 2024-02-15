import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditMunicipalityPageComponent } from './pages/create-edit-municipality-page/create-edit-municipality-page.component';
import { ListMunicipalityPageComponent } from './pages/list-municipality-page/list-municipality-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-municipality',
        component: CreateEditMunicipalityPageComponent
      },
      {
        path: 'list',
        component: ListMunicipalityPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditMunicipalityPageComponent
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
export class MunicipalityRoutingModule { }
