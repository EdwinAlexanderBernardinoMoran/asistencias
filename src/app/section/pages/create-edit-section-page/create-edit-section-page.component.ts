import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SectionService } from '../../services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectionForm } from '../../interfaces/section-create.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-edit-section-page',
  templateUrl: './create-edit-section-page.component.html',
  styles: [
  ]
})
export class CreateEditSectionPageComponent implements OnInit{

  public title: string = "Section";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 0, name: 'Inactivo'},
  ]

  public sectionForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private sectionService:SectionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentSection(): SectionForm {
    const section = this.sectionForm.value as SectionForm
    return section;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.sectionService.getSectionById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if (!data?.data) return this.router.navigate(['/sections/list'])
        this.sectionForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(){
    if (this.sectionForm.invalid) return

    if (this.currentSection.id){
      this.sectionService.updateSection(this.currentSection).subscribe(
        hamlet => {
          this.router.navigate(['/sections/list']);
          this.showSnackbar(`${this.currentSection.name} fue Actualizado Correctamente`);
        }
      )
      return
    }

    this.sectionService.addSection(this.currentSection).subscribe(
      hamlet => {
        this.router.navigate(['/sections/list']);
        this.showSnackbar(`${this.currentSection.name} fue Creado Exitosamente`)
      }
    )
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
