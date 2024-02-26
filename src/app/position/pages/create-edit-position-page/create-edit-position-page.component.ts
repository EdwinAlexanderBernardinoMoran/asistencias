import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { switchMap } from 'rxjs';

import { PositionService } from '../../services/position.service';
import { PositionForm } from '../../interfaces/position-create.interface';

@Component({
  selector: 'create-edit-position-page',
  templateUrl: './create-edit-position-page.component.html',
  styles: [
  ]
})
export class CreateEditPositionPageComponent implements OnInit{

  public title: string = "Cargo De Profesores";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public positionForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private positionService:PositionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentPosition(): PositionForm {
    const position = this.positionForm.value as PositionForm
    return position;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.positionService.getPositionById(id))
    ).subscribe(
      data => {
        console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/positions/list'])
        this.positionForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(): void{
    if (this.positionForm.invalid) return

    if (this.currentPosition.id){
      this.positionService.updatePosition(this.currentPosition).subscribe(
        position => {
          this.router.navigate(['/positions/list']);
          this.showSnackbar(`${this.currentPosition.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.positionService.addPosition(this.currentPosition).subscribe(
      position => {
        this.router.navigate(['/positions/list']);
        this.showSnackbar(`${this.currentPosition.name} fue Creado Exitosamente`);
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }


}
