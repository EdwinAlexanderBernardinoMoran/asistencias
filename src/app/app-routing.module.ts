import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then(m => m.studentModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'nationalities',
    loadChildren: () => import('./nationality/nationality.module').then(m => m.NationalityModule)
  },
  {
    path: 'municipalities',
    loadChildren: () => import('./municipality/municipality.module').then(m => m.MunicipalityModule)
  },
  {
    path: 'cantones',
    loadChildren: () => import('./canton/canton.module').then(m => m.CantonModule)
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
