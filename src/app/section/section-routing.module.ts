import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { CreateEditSectionPageComponent } from './pages/create-edit-section-page/create-edit-section-page.component';
import { ListSectionPageComponent } from './pages/list-section-page/list-section-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'new-section',
        component: CreateEditSectionPageComponent
      },
      {
        path: 'list',
        component: ListSectionPageComponent
      },
      {
        path: 'edit/:id',
        component: CreateEditSectionPageComponent
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
export class SectionRoutingModule { }

