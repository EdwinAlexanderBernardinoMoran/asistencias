import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'student-home-student-page',
  templateUrl: './home-student-page.component.html',
  styleUrls: ['./home-student-page.component.css'],
})
export class HomeStudentPageComponent implements OnInit, AfterViewInit {

  public title:string = "Listado De Estudiantes";
  public isLoading: boolean = false;
  public displayedColumns: string[] = ['id', 'names', 'lastnames', 'nie', 'incomeSpecialty', 'acciones'];
  public student: MatTableDataSource<Student>;
  public pdf = "http://backendinso.test/api/v1/pdf/student/"

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // public student: Student[] = [];
  public links: Links | null = null;

  constructor(private homeStudent: StudentService){
    this.student = new MatTableDataSource()
  }
  ngAfterViewInit(): void {
    this.student.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.homeStudent.getStudent().subscribe(
      (response: SearchStudent) => {
        this.student.data = response.data
        this.links = response.links;
        this.isLoading = false;
      }
    )
  }

}
