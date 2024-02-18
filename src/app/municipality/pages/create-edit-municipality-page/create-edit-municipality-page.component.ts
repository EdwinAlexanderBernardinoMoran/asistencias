import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MunicipalityService } from '../../services/municipality.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MunicipalityForm } from '../../interfaces/municipality-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'create-edit-municipality-page',
  templateUrl: './create-edit-municipality-page.component.html',
  styles: [
  ]
})
export class CreateEditMunicipalityPageComponent implements OnInit{
  public title: string = "Municipio";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public municipalityForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private municipalityService: MunicipalityService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.municipalityService.getMunicipalityById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/municipalities/list'])
        this.municipalityForm.reset(data?.data)
        return
      }
    )
  }

  get currentMunicipality(): MunicipalityForm {
    const municipality = this.municipalityForm.value as MunicipalityForm
    return municipality;
  }

  onSubmit(){
    if (this.municipalityForm.invalid) return

    if (this.currentMunicipality.id){
      this.municipalityService.updateMunicipality(this.currentMunicipality).subscribe(
        municipality => {
          this.router.navigate(['/municipalities/list']);
          this.showSnackbar(`${this.currentMunicipality.name} fue Actualizado Exitosamente`);
        }
      )
      return
    }

    this.municipalityService.addMunicipality(this.currentMunicipality).subscribe(
      municipality => {
        this.router.navigate(['/municipalities/list']);
        this.showSnackbar(`${this.currentMunicipality.name} fue Creado Correctamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
