import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { SpecialtyService } from '../../services/specialty.service';
import { SearchSpecialty, Specialty } from '../../interfaces/specialty.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-specialty-page',
  templateUrl: './list-specialty-page.component.html',
  styles: [
  ]
})
export class ListSpecialtyPageComponent implements OnInit {
  public title: string = 'Listado De Especialidades';
  public urlSpecialty: string = '/specialties/edit';
  public specialty: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private specialtyService: SpecialtyService){
    this.specialty = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.specialtyService.getSpecialty().subscribe(
      (response: SearchSpecialty) => {
        // console.log(response);
        this.specialty.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Specialty id is required')

    Swal.fire({
      title: `Estas seguro de eliminar la Especialidad de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.specialtyService.deleteSpecialty(data.id).subscribe(
          () => {
            this.specialty.data = this.specialty.data.filter((specialty: Specialty) => specialty.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "La Especialidad ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }
}
