import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Nationality, SearchNationality } from 'src/app/nationality/interfaces/nationality.interface';
import { StudentService } from '../../services/student.service';
import { Department, SearchDepartment } from 'src/app/department/interfaces/department.interface';
import { Municipality, SearchMunicipality } from 'src/app/municipality/interfaces/municipality.interface';
import { SearchSection, Section } from 'src/app/section/interfaces/section.interface';
import { SearchSpecialty, Specialty } from 'src/app/specialty/interfaces/specialty.interface';
import { SchoolCenter, SearchSchoolCenter } from 'src/app/school-center/interfaces/school_center.interface';
import { SearchZone, Zone } from 'src/app/zone/interfaces/zone.interface';
import { Canton, SearchCanton } from 'src/app/canton/interfaces/canton.interface';
import { Hamlet, SearchHamlet } from 'src/app/hamlet/interfaces/hamlet.interface';
import { SearchTeacher, Teacher } from 'src/app/teacher/interfaces/teacher.interface';
import { Data, StudentForm } from '../../interfaces/student-create.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'create-edit-student-page',
  templateUrl: './create-edit-student-page.component.html',
  styleUrls: ['./create-edit-student-page.component.css'],
  // standalone: true,
})


export class CreateEditStudentPageComponent implements OnInit{

  public student?:Data;

  public nationalities: Nationality[] = [];
  public departments: Department[] = [];
  public municipalities: Municipality[] = [];
  public sections: Section[] = [];
  public specialties: Specialty[] = [];
  public schoolcenters: SchoolCenter[] = [];
  public zones: Zone[] = [];
  public cantones: Canton[] = [];
  public hamlets: Hamlet[] = [];
  public teachers: Teacher[] = [];

  public title:string = "Instituto Nacional De Sonzacate";
  public ficha:string = "Ficha De Matricula";
  public customDate:Date = new Date();

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public studentForm = new FormGroup({
    id: new FormControl(),
    names: new FormControl(''),
    lastnames: new FormControl(''),
    dateBirth: new FormControl(''),
    nationality_id: new FormControl(),
    departmentBirth_id: new FormControl(),
    municipalityBirth_id: new FormControl(),
    yearStudy: new FormControl(''),
    nie: new FormControl(''),
    departureNumber: new FormControl(''),
    departureFolio: new FormControl(''),
    departureBook: new FormControl(''),
    anotherIdentificationDocument: new FormControl(''),
    salvadoreno_por: new FormControl(''),
    incomeSpecialty_id: new FormControl(),
    parvularianStudy: new FormControl(''),
    repeatSection: new FormControl(''),
    school_center_id: new FormControl(),
    previousYear: new FormControl(),
    bloodType: new FormControl(''),
    sexo: new FormControl(''),
    stateFamiliar: new FormControl(''),
    disability: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    zone_id: new FormControl(),
    departmentResidence_id: new FormControl(),
    municipalityResidence_id: new FormControl(),
    cantonResidence_id: new FormControl(),
    hamletResidence_id: new FormControl(),
    streetType: new FormControl(''),
    fullAddress: new FormControl(''),
    middleTransport: new FormControl(''),
    distanceFromHomeSchool: new FormControl(''),
    riskFactor: new FormControl(''),
    numberMembersFamily: new FormControl(),
    integrated: new FormControl(),
    dependsEconomically: new FormControl(''),
    hasChildren: new FormControl(),
    numberChildren: new FormControl(''),
    work: new FormControl(),
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
    zoneReponsible_id: new FormControl(),
    departmentReponsible_id: new FormControl(),
    municipalityReponsible_id: new FormControl(),
    cantonReponsible_id: new FormControl(),
    hamletReponsible_id: new FormControl(),
    streetTypeReponsible: new FormControl(''),
    fullAddressResponsible: new FormControl(''),
    professionIfficeResponsible: new FormControl(''),
    responsibleSchool: new FormControl(''),
    riskFactorResponsable: new FormControl(''),
    dateReviewForm: new FormControl(''),
    birthCertificate: new FormControl(),
    certificationNotes: new FormControl(),
    certificate: new FormControl(),
    photos: new FormControl(),
    RecordNotes: new FormControl(),
    residentCard: new FormControl(),
    teacher_id: new FormControl(),
  });

  public yearStudies = [
    {id: '1', yearStudy: '1° Año'},
    {id: '2', yearStudy: '2° Año'},
    {id: '3', yearStudy: '3° Año'}
  ]

  public selects = [
    {id: 1, name: 'SI'},
    {id: 0, name: 'NO'}
  ]

  constructor(
    private studentService: StudentService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  get currentStudent(): StudentForm {
    const student = this.studentForm.value as StudentForm
    return student;
  }

  ngOnInit(): void {

    // Select Nationality
    this.studentService.getNationalitySelect().subscribe(
      (response: SearchNationality) => {
        this.nationalities = response.data
      }
    )

    // Select Department
    this.studentService.getDepartmentSelect().subscribe(
      (response: SearchDepartment) => {
        this.departments = response.data
      }
    )

    // Select Municipality
    this.studentService.getMunicipalitySelect().subscribe(
      (response: SearchMunicipality) => {
        this.municipalities = response.data
      }
    )

    // Select Sections
    this.studentService.getSectionSelect().subscribe(
      (response: SearchSection) => {
        this.sections = response.data
      }
    )

    // Select Specialty
    this.studentService.getSpecialtySelect().subscribe(
      (response: SearchSpecialty) => {
        this.specialties = response.data
      }
    )

    // Select SchoolCenter
    this.studentService.getSchoolcenterSelect().subscribe(
      (response: SearchSchoolCenter) => {
        this.schoolcenters = response.data
      }
    )

    // Select Zone
    this.studentService.getZoneSelect().subscribe(
      (response: SearchZone) => {
        this.zones = response.data
      }
    )

    // Select Canton
    this.studentService.getCantonSelect().subscribe(
      (response: SearchCanton) => {
        this.cantones = response.data
      }
    )

    // Select Hamlet
    this.studentService.getHamletSelect().subscribe(
      (response: SearchHamlet) => {
        this.hamlets = response.data
      }
    )

    // Select Teacher
    this.studentService.getTeacherSelect().subscribe(
      (response: SearchTeacher) => {
        this.teachers = response.data
      }
    )

    if (!this.router.url.includes('edit')) return

    // Obteniendo id por ruta y haciendo validacion si es post o put
    this.activateRoute.params.pipe(
      switchMap(({id}) => this.studentService.getStudentById(id))
    ).subscribe(
      data => {
        // console.log(data?.data);
        if(!data?.data) return this.router.navigateByUrl('/')
        this.studentForm.reset(data?.data)
        return

      }
    )

  }

  // Formatea la fecha.
  setDateForm(input: string):void {
    const fecha = this.studentForm.get(input)?.value;
    const newfecha = new DatePipe('en-US').transform(fecha, 'yyyy-MM-dd');
    this.studentForm.get(input)?.setValue(newfecha);
  }

  onSubmit():void {

    if (this.studentForm.invalid) return;

    this.setDateForm('dateBirth');
    this.setDateForm('dateReviewForm');

    if (this.currentStudent.id) {
      this.studentService.updateStudent(this.currentStudent).subscribe(
        student => {

          this.router.navigate(['/students/list']);
          this.showSnackbar(`${this.currentStudent.names} fue Actualizado Correctamente!`)
        }
      );
      return
    }

    this.studentService.addStudent(this.currentStudent).subscribe(student => {
      this.router.navigate(['/students/list'])
      this.showSnackbar(`${this.currentStudent.names} fue Creado Exitosamente!`)
    })

    console.log({
      formIsValid: this.studentForm.valid,
      value: this.studentForm.value
    });

  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 3000
    })
  }
}
