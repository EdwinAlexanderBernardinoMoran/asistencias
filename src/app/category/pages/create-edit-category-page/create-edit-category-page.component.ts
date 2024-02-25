import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryForm } from '../../interfaces/category-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'create-edit-category-page',
  templateUrl: './create-edit-category-page.component.html',
  styles: [
  ]
})
export class CreateEditCategoryPageComponent {

  public title: string = "Categoria";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public categoryForm = new FormGroup({
    id: new FormControl(),
    // El campo no debe tener mas de 5 caracteres
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private categoryService:CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentCategory(): CategoryForm {
    const category = this.categoryForm.value as CategoryForm
    return category;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.categoryService.getCategoryById(id))
    ).subscribe(
      data => {
        console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/categories/list'])
        this.categoryForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.categoryForm.invalid) return

    if (this.currentCategory.id){
      this.categoryService.updateCategory(this.currentCategory).subscribe(
        category => {
          this.router.navigate(['/categories/list']);
          this.showSnackbar(`${this.currentCategory.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.categoryService.addCategory(this.currentCategory).subscribe(
      category => {
        this.router.navigate(['/categories/list']);
        this.showSnackbar(`${this.currentCategory.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
