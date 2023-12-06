import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interfaces';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Person {
  id: number;
  name: string;
  lastname: string;
  nie: number;
  especialidad: string;
}

const ELEMENT_DATA: Person[] = [
  {id: 1, name: 'Edwin Alexander', lastname: 'Bernardino Moran', nie: 1.0079, especialidad: 'Desarrollo De Software'},
  {id: 2, name: 'Benjamin Ernesto', lastname: 'Moran Mate', nie: 4.0026, especialidad: 'Ingenierio en Sistemas Informaticos'},
  {id: 3, name: 'Karla Ibeth', lastname: 'Cruz Moran', nie: 6.941, especialidad: 'Administrativo Contable'},
  {id: 4, name: 'Maria Magdalena', lastname: 'Moran Mate', nie: 9.0122, especialidad: 'Atencion Primaria En Salud'},
  {id: 5, name: 'Jonathan Alexander', lastname: 'Bernardino Moran', nie: 10.811, especialidad: 'Desarrollo De Software'},
  {id: 5, name: 'Alfredo Adonay', lastname: 'Casio Moran', nie: 10.811, especialidad: 'Desarrollo De Software'},
  {id: 5, name: 'Moises Adonay', lastname: 'Bonilla Alvarenga', nie: 10.811, especialidad: 'Desarrollo De Software'},
  {id: 5, name: 'Abdiaz De Jesus', lastname: 'Martinez Hernandez', nie: 10.811, especialidad: 'Desarrollo De Software'}
];

@Component({
  selector: 'student-home-student-page',
  templateUrl: './home-student-page.component.html',
  styleUrls: ['./home-student-page.component.css'],
})
export class HomeStudentPageComponent implements OnInit, AfterViewInit {

  public title:string = "Listado De Estudiantes";

  public displayedColumns: string[] = ['id', 'name', 'lastname', 'nie', 'especialidad', 'acciones'];
  public dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public student: Student[] = [];
  public links: Links | null = null;

  constructor(private homeStudent: StudentService){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.homeStudent.getStudent().subscribe(
      (response: SearchStudent) => {
        this.student = response.data;
        this.links = response.links;
      }
    )
  }

}
