import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { HamletService } from '../../services/hamlet.service';
import { Hamlet, SearchHamlet } from '../../interfaces/hamlet.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-hamlet-page',
  templateUrl: './list-hamlet-page.component.html',
  styles: [
  ]
})
export class ListHamletPageComponent implements OnInit{

  public title: string = 'Listado De Caserios';
  public urlHamlet: string = '/hamlets/edit';
  public hamlet: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor( private hamletService:HamletService ){
    this.hamlet = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.hamletService.getHamlet().subscribe(
      (response: SearchHamlet) => {
        // console.log(response);
        this.hamlet.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Hamlet id is required')

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
        this.hamletService.deleteHamlet(data.id).subscribe(
          () => {
            this.hamlet.data = this.hamlet.data.filter((hamlet: Hamlet) => hamlet.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "El Caserio ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }


}
