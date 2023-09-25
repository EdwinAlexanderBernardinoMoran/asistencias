import { Component, Input } from '@angular/core';
import { Department } from '../../interfaces/department.interface';

@Component({
  selector: 'table-department',
  templateUrl: './table-department.component.html',
  styleUrls: ['./table-department.component.css']
})
export class TableDepartmentComponent {
  @Input()
  public departments: Department[] = [];
}
