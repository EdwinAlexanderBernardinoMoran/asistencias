import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

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
  public links: Links | null = null;

  constructor(
    private homeStudent: StudentService,
  ){
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

    // setInterval(() => {
    //   this.refreshData();
    // }, 60000);
  }

  OnDelete(id: number, names: string):void {

    if (!id) throw Error('Hero id is required')

    Swal.fire({
      title: `Estas seguro de eliminar a ${names}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.homeStudent.deleteStudent(id).subscribe(() => {

          this.student.data = this.student.data.filter((student: Student) => student.id !== id)

          Swal.fire({
            title: "Eliminado!",
            text: "El Estudiante ha sido eliminado con exito!",
            icon: "success"
          })
          // .then(result => {
          //   if (result.isConfirmed) {
          //     this.router.navigate(['/students']);
          //     window.location.reload()
          //   }
          // });
        })


      }
    });
  }


  // Refrescar data de alumnos

  // refreshData(): void {
  //   this.isLoading = true;
  //   this.homeStudent.getStudent().subscribe(
  //     (response: SearchStudent) => {
  //       this.student.data = response.data;
  //       this.links = response.links;
  //       this.isLoading = false;
  //     }
  //   );
  // }

  // showSnackbar(message: string): void{
  //   this.snackbar.open(message, 'done', {
  //     duration: 3000
  //   })
  // }

}
