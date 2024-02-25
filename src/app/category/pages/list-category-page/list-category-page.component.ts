import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Information } from 'src/app/shared/components/intefaces/Information.interface';
import { CategoryService } from '../../services/category.service';
import { Category, SearchCategory } from '../../interfaces/category.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'list-category-page',
  templateUrl: './list-category-page.component.html',
  styles: [
  ]
})
export class ListCategoryPageComponent {

  public title: string = 'Listado De Categorias De Profesores';
  public urlCategory: string = '/categories/edit';
  public category: MatTableDataSource<Information>;
  public isLoading: boolean = false;

  constructor(private categoryService: CategoryService){
    this.category = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.categoryService.getCategory().subscribe(
      (response: SearchCategory) => {
        console.log(response);
        this.category.data = response.data
        this.isLoading = false
      }
    )
  }

  onDelete(data: {id: number, name: string}):void{
    if(!data.id) throw Error('Category id is required')

    Swal.fire({
      title: `Estas seguro de eliminar la Categoria ${data.name}`,
      text: "Este proceso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(data.id).subscribe(
          () => {
            this.category.data = this.category.data.filter((category: Category) => category.id !== data.id)

            Swal.fire({
              title: "Eliminado!",
              text: "La Categoria ha sido eliminado con exito!",
              icon: "success"
            })
          }
        )
      }
    })
  }
}
