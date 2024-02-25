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
    path: 'hamlets',
    loadChildren: () => import('./hamlet/hamlet.module').then(m => m.HamletModule)
  },
  {
    path: 'zones',
    loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule)
  },
  {
    path: 'specialties',
    loadChildren: () => import('./specialty/specialty.module').then(m => m.SpecialtyModule)
  },
  {
    path: 'sections',
    loadChildren: () => import('./section/section.module').then(m => m.SectionModule)
  },
  {
    path: 'schoolcenters',
    loadChildren: () => import('./school-center/school-center.module').then(m => m.SchoolCenterModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./career/career.module').then(m => m.CareerModule)
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
