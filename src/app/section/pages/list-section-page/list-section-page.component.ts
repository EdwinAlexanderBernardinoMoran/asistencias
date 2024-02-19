import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { SectionService } from '../../services/section.service';
import { SearchSection, Section } from '../../interfaces/section.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-section-page',
  templateUrl: './list-section-page.component.html',
  styles: [
  ]
})
export class ListSectionPageComponent implements OnInit{

  public title: string = 'Listado De Secciones';
  public urlsection: string = '/sections/edit';
  public section: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor( private sectionService:SectionService ){
    this.section = new MatTableDataSource()
  }
  ngOnInit(): void {
    this.isLoading = true
    this.sectionService.getSection().subscribe(
      (response: SearchSection) => {
        console.log(response);
        this.section.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Hamlet id is required')

    Swal.fire({
      title: `Estas seguro de eliminar la Sección de ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.sectionService.deleteSection(data.id).subscribe(
          () => {
            this.section.data = this.section.data.filter((section: Section) => section.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "La Sección ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }
}
