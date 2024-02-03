import { Component, Input } from '@angular/core';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css']
})
export class TableStudentComponent {
  @Input()
  public students: Student[] = [];
}
