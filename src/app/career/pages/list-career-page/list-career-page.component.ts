import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { CareerService } from '../../services/career.service';
import { Career, SearchCareer } from '../../interfaces/career.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'list-career-page',
  templateUrl: './list-career-page.component.html',
  styles: [
  ]
})
export class ListCareerPageComponent implements OnInit{

  public title: string = 'Listado De Especialidades De Profesores';
  public urlCareer: string = '/careers/edit';
  public career: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private careerService: CareerService){
    this.career = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.careerService.getCareer().subscribe(
      (response: SearchCareer) => {
        console.log(response);
        this.career.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Hamlet id is required')

    Swal.fire({
      title: `Estas seguro de eliminar esta Especialidad de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.careerService.deleteCareer(data.id).subscribe(
          () => {
            this.career.data = this.career.data.filter((career: Career) => career.id !== data.id)

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
