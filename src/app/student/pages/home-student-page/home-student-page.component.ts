import { Component, OnInit } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interfaces';
import { StudentService } from '../../services/student.service';

export interface PeriodicElement {
  id: number;
  name: string;
  lastname: string;
  nie: number;
  especialidad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Edwin Alexander', lastname: 'Bernardino Moran', nie: 1.0079, especialidad: 'Desarrollo De Software'},
  {id: 2, name: 'Benjamin Ernesto', lastname: 'Moran Mate', nie: 4.0026, especialidad: 'Ingenierio en Sistemas Informaticos'},
  {id: 3, name: 'Karla Ibeth', lastname: 'Cruz Moran', nie: 6.941, especialidad: 'Administrativo Contable'},
  {id: 4, name: 'Maria Magdalena', lastname: 'Moran Mate', nie: 9.0122, especialidad: 'Atencion Primaria En Salud'},
  {id: 5, name: 'Jonathan Alexander', lastname: 'Bernardino Moran', nie: 10.811, especialidad: 'Desarrollo De Software'}
];

@Component({
  selector: 'student-home-student-page',
  templateUrl: './home-student-page.component.html',
  styleUrls: ['./home-student-page.component.css'],
})
export class HomeStudentPageComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'lastname', 'nie', 'especialidad'];
  public dataSource = ELEMENT_DATA;

  public student: Student[] = [];
  public links: Links | null = null;

  constructor(private homeStudent: StudentService){}

  ngOnInit(): void {
    this.homeStudent.getStudent().subscribe(
      (response: SearchStudent) => {
        this.student = response.data;
        this.links = response.links;
      }
    )
  }

}
