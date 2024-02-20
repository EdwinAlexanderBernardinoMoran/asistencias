import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { switchMap } from 'rxjs';

import { SchoolCenterForm } from '../../interfaces/school-center-create.interface';
import { SchoolCenterService } from '../../services/school-center.service';

@Component({
  selector: 'create-edit-schoolcenter-page',
  templateUrl: './create-edit-schoolcenter-page.component.html',
  styles: [
  ]
})
export class CreateEditSchoolcenterPageComponent {

  public title: string = "Centro Escolar";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public schoolCenterForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    infraestructure_code: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private schoolcenterService:SchoolCenterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentShoolCenter(): SchoolCenterForm {
    const shoolcenter = this.schoolCenterForm.value as SchoolCenterForm
    return shoolcenter;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.schoolcenterService.getSchoolCenterById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/schoolcenters/list'])
        this.schoolCenterForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.schoolCenterForm.invalid) return

    if (this.currentShoolCenter.id){
      this.schoolcenterService.updateSchoolCenter(this.currentShoolCenter).subscribe(
        schoolcenter => {
          this.router.navigate(['/schoolcenters/list']);
          this.showSnackbar(`${this.currentShoolCenter.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.schoolcenterService.addSchoolCenter(this.currentShoolCenter).subscribe(
      schoolcenters => {
        this.router.navigate(['/schoolcenters/list']);
        this.showSnackbar(`${this.currentShoolCenter.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
