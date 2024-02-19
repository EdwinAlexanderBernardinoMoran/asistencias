import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ZoneService } from '../../services/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZoneForm } from '../../interfaces/zone-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-edit-zone-page',
  templateUrl: './create-edit-zone-page.component.html',
  styles: [
  ]
})
export class CreateEditZonePageComponent {

  public title: string = "Zona";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public zoneForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private zoneService: ZoneService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentZone(): ZoneForm {
    const zone = this.zoneForm.value as ZoneForm
    return zone;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.zoneService.getZoneById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/zones/list'])
        this.zoneForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.zoneForm.invalid) return

    if (this.currentZone.id){
      this.zoneService.updateZone(this.currentZone).subscribe(
        zone => {
          this.router.navigate(['/zones/list']);
          this.showSnackbar(`${this.currentZone.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.zoneService.addZone(this.currentZone).subscribe(
      zone => {
        this.router.navigate(['/zones/list']);
        this.showSnackbar(`${this.currentZone.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
