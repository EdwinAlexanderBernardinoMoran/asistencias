import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Hamlet{
  id: number,
  name: string,
}

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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public studentForm = new FormGroup({
    names: new FormControl(''),
    lastnames: new FormControl(''),
    dateBirth: new FormControl(''),
    nationality_id: new FormControl(''),
    departmentBirth_id: new FormControl(''),
    municipalityBirth_id: new FormControl(''),
    yearStudy: new FormControl(''),
    nie: new FormControl(''),
    departureNumber: new FormControl(''),
    departureFolio: new FormControl(''),
    departureBook: new FormControl(''),
    anotherIdentificationDocument: new FormControl(''),
    salvadoreno_por: new FormControl(''),
    incomeSpecialty_id: new FormControl(''),
    parvularianStudy: new FormControl(''),
    repeatSection: new FormControl(''),
    school_center_id: new FormControl(''),
    previousYear: new FormControl(''),
    bloodType: new FormControl(''),
    sexo: new FormControl(''),
    stateFamiliar: new FormControl(''),
    disability: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    zone_id: new FormControl(''),
    departmentResidence_id: new FormControl(''),
    municipalityResidence_id: new FormControl(''),
    cantonResidence_id: new FormControl(''),
    hamletResidence_id: new FormControl(''),
    streetType: new FormControl(''),
    fullAddress: new FormControl(''),
    middleTransport: new FormControl(''),
    distanceFromHomeSchool: new FormControl(''),
    riskFactor: new FormControl(''),
    numberMembersFamily: new FormControl(''),
    integrated: new FormControl(''),
    dependsEconomically: new FormControl(''),
    hasChildren: new FormControl(''),
    numberChildren: new FormControl(''),
    work: new FormControl(''),
    coexistenceWith: new FormControl(''),
    mothersName: new FormControl(''),
    occupationMother: new FormControl(''),
    workplaceOfTheMother: new FormControl(''),
    mothersPhone: new FormControl(''),
    fathersName: new FormControl(''),
    occupationFather: new FormControl(''),
    workplaceOfTheFather: new FormControl(''),
    fathersPhone: new FormControl(''),
    ResponsibleNames: new FormControl(''),
    ResponsibleLastNames: new FormControl(''),
    DuiResponsible: new FormControl(''),
    familyStateResponsible: new FormControl(''),
    emailResponsible: new FormControl(''),
    phoneResponsible: new FormControl(''),
    zoneReponsible_id: new FormControl(''),
    departmentReponsible_id: new FormControl(''),
    municipalityReponsible_id: new FormControl(''),
    cantonReponsible_id: new FormControl(''),
    hamletReponsible_id: new FormControl(''),
    streetTypeReponsible: new FormControl(''),
    fullAddressResponsible: new FormControl(''),
    professionIfficeResponsible: new FormControl(''),
    responsibleSchool: new FormControl(''),
    riskFactorResponsable: new FormControl(''),
    dateReviewForm: new FormControl(''),
    birthCertificate: new FormControl(''),
    certificationNotes: new FormControl(''),
    certificate: new FormControl(''),
    photos: new FormControl(''),
    RecordNotes: new FormControl(''),
    residentCard: new FormControl(''),
    teacher_id: new FormControl(''),
  });

  onSubmit():void {
    console.log({
      formIsValid: this.studentForm.valid,
      value: this.studentForm.value
    });

  }
}
