import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../service/department.service';
import { MatTableDataSource } from '@angular/material/table';
import { Information, SearchInformation } from 'src/app/shared/components/intefaces/Information.interface';
import { Department } from '../../interfaces/department.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'home-department-page',
  templateUrl: './home-department-page.component.html',
  styleUrls: ['./home-department-page.component.css']
})
export class HomeDepartmentPageComponent implements OnInit{

  public title:string = "Listado De Departamentos";
  public department: MatTableDataSource<Information>;
  public urlDepartment:string = '/departments/edit'
  public isLoading: boolean = false;

  constructor(
    private serviceDepartment: DepartmentsService
  ){
    this.department = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.serviceDepartment.getDepartment().subscribe(
      (response: SearchInformation) => {
        // console.log(response.data);
        this.department.data = response.data
        this.isLoading = false;
      }
    )
  }

  // TODO: Metodo de eliminacion
  OnDelete(data: { id: number, name: string }):void{

    if(!data.id) throw Error('Department id is required')

    // console.log('department', data.id);
    Swal.fire({
      title: `Estas seguro de eliminar al Departamento de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceDepartment.deleteDepartment(data.id).subscribe(
          () => {
            this.department.data = this.department.data.filter((department: Department) => department.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "El Departamento ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    });
  }

}
