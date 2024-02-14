import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { NationalityService } from '../../services/nationality.service';
import { Nationality, SearchNationality } from '../../interfaces/nationality.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-nationality-page',
  templateUrl: './list-nationality-page.component.html',
  styles: [
  ]
})
export class ListNationalityPageComponent implements OnInit{
  public title:string = 'Listado de Nacionalidades'
  public urlNationality:string = '/nationalities/edit'
  public nationality: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(
    private nationalityService: NationalityService
  ){
    this.nationality = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.nationalityService.getNationality().subscribe(
      (response: SearchNationality) => {
        // console.log(response);
        this.nationality.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: { id: number, name: string }){
    if(!data.id) throw Error('Nationality id is required')

    Swal.fire({
      title: `Estas seguro de eliminar la Nacionalidad de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.nationalityService.deleteNationality(data.id).subscribe(
          () => {
            this.nationality.data = this.nationality.data.filter((nationality: Nationality) => nationality.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "La Nacionalidad ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    });
  }

}
