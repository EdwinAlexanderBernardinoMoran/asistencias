import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Information } from '../intefaces/Information.interface';

@Component({
  selector: 'table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.css'],
})
export class TableGenericComponent {

  public displayedColumns: string[] = ['id', 'name', 'status', 'created_at', 'acciones'];

  @Input()
  public data!:MatTableDataSource<Information>;

  @Input()
  public navegacion!:string;

  @Output()
  public onDelete: EventEmitter<{ id: number, name: string }  > = new EventEmitter<{ id: number, name: string } >();

  departmentDelete(id: number, name: string):void{
    this.onDelete.emit({ id, name })
  }

}
