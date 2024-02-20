import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

import { SchoolCenter, SearchSchoolCenter } from '../../interfaces/school_center.interface';
import { SchoolCenterService } from '../../services/school-center.service';

@Component({
  selector: 'list-schoolcenter-page',
  templateUrl: './list-schoolcenter-page.component.html',
  styleUrls: ['./list-schoolcenter-page.component.css'],
})
export class ListSchoolcenterPageComponent implements OnInit{

  public title:string = "Listado De Centros Escolares";
  public isLoading: boolean = false;

  public displayedColumns: string[] = ['id', 'name', 'infraestructure_code', 'status', 'created_at','acciones'];

  public schoolcenters: MatTableDataSource<SchoolCenter>;

  constructor(
    private schoolcenterService: SchoolCenterService,
  ){
    this.schoolcenters = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.schoolcenterService.getSchoolCenter().subscribe(
      (response: SearchSchoolCenter) => {
        console.log(response.data);

        this.schoolcenters.data = response.data
        this.isLoading = false
      }
    )
  }

  OnDelete(id: number, names: string){
    if (!id) throw Error('SchoolCenter id is required')

    Swal.fire({
      title: `Estas seguro de eliminar el Centro Escolar ${names}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.schoolcenterService.deleteSchoolCenter(id).subscribe(
          () => {
            this.schoolcenters.data = this.schoolcenters.data.filter((schoolcenter: SchoolCenter) => schoolcenter.id !== id)

            Swal.fire({
              title: "Eliminado!",
              text: "El Centro Escolar ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    });
  }
}
