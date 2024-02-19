import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { ZoneService } from '../../services/zone.service';
import Swal from 'sweetalert2';
import { SearchZone, Zone } from '../../interfaces/zone.interface';

@Component({
  selector: 'list-zone-page',
  templateUrl: './list-zone-page.component.html',
  styles: [
  ]
})
export class ListZonePageComponent implements OnInit{
  public title: string = 'Listado De Zonas';
  public urlZone: string = '/zones/edit';
  public zone: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private zoneService:ZoneService){
    this.zone = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.zoneService.getZone().subscribe(
      (response: SearchZone) => {
        // console.log(response);
        this.zone.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Zone id is required')

    Swal.fire({
      title: `Estas seguro de eliminar la Zona ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.zoneService.deleteZone(data.id).subscribe(
          () => {
            this.zone.data = this.zone.data.filter((zone: Zone) => zone.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "La Zona ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }
}
