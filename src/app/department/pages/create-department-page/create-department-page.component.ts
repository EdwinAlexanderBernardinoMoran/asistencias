import {Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../service/department.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentForm } from '../../interfaces/department-create.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-department-page',
  templateUrl: './create-department-page.component.html',
  styleUrls: ['./create-department-page.component.css']
})
export class CreateDepartmentPageComponent implements OnInit{

  public title: string = "Departamento";
  public status = [
    {id: 1, name: 'Activo'},
    {id: 2, name: 'Inactivo'},
  ]

  public departmentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    status: new FormControl()
  });

  constructor(
    private departmentService: DepartmentsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}


  get currentDepartment(): DepartmentForm {
    const department = this.departmentForm.value as DepartmentForm
    return department;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.departmentService.getDepartmentById(id))
    ).subscribe(
      data => {
        console.log(data?.data)
        if (!data?.data) return this.router.navigate(['/departments/list'])
        this.departmentForm.reset(data?.data)
        return
      }
    )
  }

  onSubmit(): void{
    if (this.departmentForm.invalid) return

    if (this.currentDepartment.id) {
      this.departmentService.updateDepartment(this.currentDepartment).subscribe(
        department => {
          this.router.navigate(['/departments/list']);
          this.showSnackbar(`${this.currentDepartment.name} fue Actualizado Correctamente!`)
        }
      )
      return
    }

    // console.log({
    //   formIsValid: this.departmentForm.valid,
    //   value: this.departmentForm.value
    // });

    this.departmentService.addDepartment(this.currentDepartment).subscribe(department => {

      this.router.navigate(['/departments/list']);
      this.showSnackbar(`${this.currentDepartment.name} fue Creado Exitosamente!`);
    })
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}



