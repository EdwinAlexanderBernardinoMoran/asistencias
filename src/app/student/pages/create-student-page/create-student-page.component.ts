import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'student-create-student-page',
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.css'],
  // standalone: true,
})
export class CreateStudentPageComponent {

  public title:string = "Instituto Nacional De Sonzacate";
  public ficha:string = "Ficha De Matricula";
  public customDate:Date = new Date();

  hide = true;

  disableSelect = new FormControl(false);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
