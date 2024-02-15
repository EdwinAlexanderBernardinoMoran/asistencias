import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { MunicipalityService } from '../../services/municipality.service';
import { Municipality, SearchMunicipality } from '../../interfaces/municipality.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-municipality-page',
  templateUrl: './list-municipality-page.component.html',
  styles: [
  ]
})
export class ListMunicipalityPageComponent implements OnInit{
  public title: string = 'Listado de Municipios';
  public urlMunicipality: string = '/municipalities/edit';
  public municipality: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private municipalityService: MunicipalityService){
    this.municipality = new MatTableDataSource()
  }
  ngOnInit(): void {
    this.isLoading = true
    this.municipalityService.getMunicipality().subscribe(
      (response: SearchMunicipality) => {
        console.log(response);
        this.municipality.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: { id: number, name: string }):void {
    if(!data.id) throw Error('Municipality id is required')

    Swal.fire({
      title: `Estas seguro de eliminar el Municipio de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.municipalityService.deleteMunicipality(data.id).subscribe(
          () => {
            this.municipality.data = this.municipality.data.filter((muncipality: Municipality) => muncipality.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "El Municipio ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    });
  }

}
