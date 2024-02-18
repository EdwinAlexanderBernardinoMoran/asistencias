import { Component, OnInit } from '@angular/core';
import { HamletService } from '../../services/hamlet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';
import { HamletForm } from '../../interfaces/hamlet-create.interface';

@Component({
  selector: 'create-edit-hamlet-page',
  templateUrl: './create-edit-hamlet-page.component.html',
  styles: [
  ]
})
export class CreateEditHamletPageComponent implements OnInit{

  public title: string = "Caserio";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public hamletForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private hamletService:HamletService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentHamlet(): HamletForm {
    const hamlet = this.hamletForm.value as HamletForm
    return hamlet;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.hamletService.getHamletById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/hamlets/list'])
        this.hamletForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.hamletForm.invalid) return

    if (this.currentHamlet.id){
      this.hamletService.updateHamlet(this.currentHamlet).subscribe(
        hamlet => {
          this.router.navigate(['/hamlets/list']);
          this.showSnackbar(`${this.currentHamlet.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.hamletService.addHamlet(this.currentHamlet).subscribe(
      hamlet => {
        this.router.navigate(['/hamlets/list']);
        this.showSnackbar(`${this.currentHamlet.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
