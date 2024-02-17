import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { switchMap } from 'rxjs';
import { CantonService } from '../../service/canton.service';
import { CantonForm } from '../../interfaces/canton-create.interface';

@Component({
  selector: 'create-edit-canton-page',
  templateUrl: './create-edit-canton-page.component.html',
  styles: [
  ]
})
export class CreateEditCantonPageComponent implements OnInit{
  public title: string = "Canton";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public cantonForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private cantonService: CantonService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentCanton(): CantonForm{
    const canton = this.cantonForm.value as CantonForm
    return canton;
  }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.cantonService.getCantonById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/cantones/list'])
        this.cantonForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.cantonForm.invalid) return

    if (this.currentCanton.id) {
      this.cantonService.updateCanton(this.currentCanton).subscribe(
        canton => {
          this.router.navigate(['/cantones/list']);
          this.showSnackbar(`${this.currentCanton.name} Actualizado Correctamente`)
        }
      )
      return
    }

    this.cantonService.addCanton(this.currentCanton).subscribe(
      canton => {
        this.router.navigate(['/cantones/list']);
        this.showSnackbar(`${this.currentCanton.name} fue creado Exitosamente!`);
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }

}
