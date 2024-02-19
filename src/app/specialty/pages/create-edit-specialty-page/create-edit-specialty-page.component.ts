import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SpecialtyService } from '../../services/specialty.service';
import { SpecialtyForm } from '../../interfaces/specialty-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'create-edit-specialty-page',
  templateUrl: './create-edit-specialty-page.component.html',
  styles: [
  ]
})
export class CreateEditSpecialtyPageComponent implements OnInit{

  public title: string = "Especialidad";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public specialtyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private specialyService:SpecialtyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentSpecialty(): SpecialtyForm {
    const specialty = this.specialtyForm.value as SpecialtyForm
    return specialty;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.specialyService.getSpecialtyById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/specialties/list'])
        this.specialtyForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.specialtyForm.invalid) return

    if (this.currentSpecialty.id){
      this.specialyService.updateSpecialty(this.currentSpecialty).subscribe(
        specialty => {
          this.router.navigate(['/specialties/list']);
          this.showSnackbar(`${this.currentSpecialty.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.specialyService.addSpecialty(this.currentSpecialty).subscribe(
      specialty => {
        this.router.navigate(['/specialties/list']);
        this.showSnackbar(`${this.currentSpecialty.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }

}
