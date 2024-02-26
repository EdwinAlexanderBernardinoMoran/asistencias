import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { PositionService } from '../../services/position.service';
import { Position, SearchPosition } from '../../interfaces/position.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-position-page',
  templateUrl: './list-position-page.component.html',
  styles: [
  ]
})
export class ListPositionPageComponent implements OnInit {

  public title: string = 'Listado De Cargos De Profesores';
  public urlPosition: string = '/positions/edit';
  public position: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private positionService: PositionService){
    this.position = new MatTableDataSource()
  }
  ngOnInit(): void {
    this.isLoading = true
    this.positionService.getPosition().subscribe(
      (response: SearchPosition) => {
        // console.log(response);
        this.position.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Position id is required')

    Swal.fire({
      title: `Estas seguro de eliminar el Cargo de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.positionService.deletePosition(data.id).subscribe(
          () => {
            this.position.data = this.position.data.filter((position: Position) => position.id!== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "El cargo ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }



}
