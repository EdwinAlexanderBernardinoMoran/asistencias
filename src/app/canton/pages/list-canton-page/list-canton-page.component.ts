import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CantonService } from '../../service/canton.service';
import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { Canton, SearchCanton } from '../../interfaces/canton.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-canton-page',
  templateUrl: './list-canton-page.component.html',
  styles: [
  ]
})
export class ListCantonPageComponent implements OnInit{

  public title: string = 'Listado De Cantones';
  public urlCanton: string = '/cantones/edit';
  public canton: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private cantonService: CantonService){
    this.canton = new MatTableDataSource()
  }

  // TODO: Carga de datos
  ngOnInit(): void {
    this.isLoading = true;
    this.cantonService.getCanton().subscribe(
      (response: SearchCanton) => {
        // console.log(response);
        this.canton.data = response.data;
        this.isLoading = false
      }
    )
  }

  // TODO: Metodo de Eliminacion
  onDelete(data: { id: number, name: string }){
    if(!data.id) throw Error('Canton id is required')

    Swal.fire({
      title: `Estas seguro de eliminar el Canton ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.cantonService.deleteCanton(data.id).subscribe(
          () => {
            this.canton.data = this.canton.data.filter((canton: Canton) => canton.id !== data.id)
            Swal.fire({
              title: "Eliminado!",
              text: "La Canton ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }
}
