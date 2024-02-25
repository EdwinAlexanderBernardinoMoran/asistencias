import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

@Component({
  selector: 'student-home-student-page',
  templateUrl: './list-student-page.component.html',
  styleUrls: ['./list-student-page.component.css'],
})
export class ListStudentPageComponent implements OnInit, AfterViewInit {

  public title:string = "Listado De Estudiantes";
  public isLoading: boolean = false;
  public displayedColumns: string[] = ['id', 'names', 'lastnames', 'nie', 'incomeSpecialty', 'created_at','acciones'];
  public student: MatTableDataSource<Student>;
  public pdf = "http://backendinso.test/api/v1/pdf/student/"

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public links: Links | null = null;

  constructor(
    private studentService: StudentService,
  ){
    this.student = new MatTableDataSource()
  }
  ngAfterViewInit(): void {
    this.student.paginator = this.paginator;
  }

  ngOnInit(): void {

    if (this.studentService.createUpdate){
      console.log('primer mensjae');

      this.studentService.getStudent().subscribe(
        (response: SearchStudent) => {
          this.student.data = response.data,
          this.links = response.links;
        }
      )
    }

    console.log('segundo mensjae');


    const resultado = this.student.data = this.studentService.cacheStore.student;

    if (resultado.length === 0) {
      console.log('tercer mensjae');

      return this.studentDataUpload()
    }

    this.student.data = resultado;

    // setInterval(() => {
    //   this.refreshData();
    // }, 60000);
  }

  studentDataUpload(){
    this.isLoading = true;
    this.studentService.getStudent().subscribe(
      (response: SearchStudent) => {
        this.student.data = response.data
        this.links = response.links;
        this.isLoading = false;
      }
    )
  }

  OnDelete(id: number, names: string):void {

    if (!id) throw Error('Student id is required')

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
        this.studentService.deleteStudent(id).subscribe(() => {

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
  //   this.studentService.getStudent().subscribe(
  //     (response: SearchStudent) => {
  //       this.student.data = response.data;
  //       this.links = response.links;
  //       this.isLoading = false;
  //     }
  //   );
  // }

}
