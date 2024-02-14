import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NationalityService } from '../../services/nationality.service';
import { NationalityForm } from '../../interfaces/nationality-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'create-edit-nationality-page',
  templateUrl: './create-edit-nationality-page.component.html',
  styles: [
  ]
})
export class CreateEditNationalityPageComponent implements OnInit{
  public title: string = "Nacionalidad";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public nationalityForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private nationalityService: NationalityService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentNationality(): NationalityForm {
    const nationality = this.nationalityForm.value as NationalityForm
    return nationality;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.nationalityService.getNationalityById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/nationalities/list'])
        this.nationalityForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.nationalityForm.invalid) return

    if (this.currentNationality.id) {
      this.nationalityService.updateNationality(this.currentNationality).subscribe(
        nationality => {
          this.router.navigate(['/nationalities/list']);
          this.showSnackbar(`${this.currentNationality.name} Actualizado Correctamente`)
        }
      )
      return
    }

    this.nationalityService.addNationality(this.currentNationality).subscribe(
      nationality => {
        this.router.navigate(['/nationalities/list']);
        this.showSnackbar(`${this.currentNationality.name} fue creada Exitosamente!`);
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
