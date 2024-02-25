import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CareerService } from '../../services/career.service';
import { CareerForm } from '../../interfaces/career-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'create-edit-career-page',
  templateUrl: './create-edit-career-page.component.html',
  styles: [
  ]
})
export class CreateEditCareerPageComponent implements OnInit{

  public title: string = "Especialidad De Profesores";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public careerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private careerService:CareerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentCareer(): CareerForm {
    const career = this.careerForm.value as CareerForm
    return career;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.careerService.getCareerById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/careers/list'])
        this.careerForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.careerForm.invalid) return

    if (this.currentCareer.id){
      this.careerService.updateCareer(this.currentCareer).subscribe(
        specialty => {
          this.router.navigate(['/careers/list']);
          this.showSnackbar(`${this.currentCareer.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.careerService.addCareer(this.currentCareer).subscribe(
      specialty => {
        this.router.navigate(['/careers/list']);
        this.showSnackbar(`${this.currentCareer.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
