import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStudentPageComponent } from './pages/home-student-page/home-student-page.component';
import { CreateStudentPageComponent } from './pages/create-student-page/create-student-page.component';
import { EditStudentPageComponent } from './pages/edit-student-page/edit-student-page.component';
import { StudentRoutingModule } from './student-routing.module';
import { TableStudentComponent } from './components/table-student/table-student.component';



@NgModule({
  declarations: [
    HomeStudentPageComponent,
    CreateStudentPageComponent,
    EditStudentPageComponent,
    TableStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class studentModule { }
