import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchStudent } from '../interfaces/student.interface';
import { SearchNationality } from 'src/app/nationality/interfaces/nationality.interface';
import { SearchDepartment } from 'src/app/department/interfaces/department.interface';
import { SearchMunicipality } from 'src/app/municipality/interfaces/municipality.interface';
import { SearchSection } from 'src/app/section/interfaces/section.interface';
import { SearchSpecialty } from 'src/app/specialty/interfaces/specialty.interface';
import { SearchSchoolCenter } from 'src/app/school-center/interfaces/school_center.interface';
import { SearchZone } from 'src/app/zone/interfaces/zone.interface';
import { SearchCanton } from 'src/app/canton/interfaces/canton.interface';
import { SearchHamlet } from 'src/app/hamlet/interfaces/hamlet.interface';
import { SearchTeacher } from 'src/app/teacher/interfaces/teacher.interface';
import { Data, StudentForm } from '../interfaces/student-create.interface';

@Injectable({providedIn: 'root'})
export class StudentService {

  private apiUrl:string = 'http://backendinso.test/api/v1';

  constructor(private http: HttpClient) { }

  // Select Nationality
  getNationalitySelect(): Observable<SearchNationality>{
    return this.http.get<SearchNationality>(`${this.apiUrl}/nationality`);
  }

  // Select Department
  getDepartmentSelect(): Observable<SearchDepartment>{
    return this.http.get<SearchDepartment>(`${this.apiUrl}/department`);
  }

  // Select Municipality
  getMunicipalitySelect(): Observable<SearchMunicipality>{
    return this.http.get<SearchMunicipality>(`${this.apiUrl}/municipality`);
  }

  // Select Anio Bachillerato
  getSectionSelect(): Observable<SearchSection>{
    return this.http.get<SearchSection>(`${this.apiUrl}/section`);
  }

  // Select Specialty
  getSpecialtySelect(): Observable<SearchSpecialty>{
    return this.http.get<SearchSpecialty>(`${this.apiUrl}/specialty`);
  }

  // Select School_Center
  getSchoolcenterSelect(): Observable<SearchSchoolCenter>{
    return this.http.get<SearchSchoolCenter>(`${this.apiUrl}/school_center`);
  }

  // Select Zone
  getZoneSelect(): Observable<SearchZone>{
    return this.http.get<SearchZone>(`${this.apiUrl}/zone`);
  }

  // Select Canton
  getCantonSelect(): Observable<SearchCanton>{
    return this.http.get<SearchCanton>(`${this.apiUrl}/canton`);
  }

  // Select Hamlet
  getHamletSelect(): Observable<SearchHamlet>{
    return this.http.get<SearchHamlet>(`${this.apiUrl}/hamlet`);
  }

  // Select Teacher
  getTeacherSelect(): Observable<SearchTeacher>{
    return this.http.get<SearchTeacher>(`${this.apiUrl}/teacher`);
  }

  // Obtiene todos los estudiantes
  getStudent(): Observable<SearchStudent>{
    return this.http.get<SearchStudent>(`${this.apiUrl}/student`).pipe(
      delay(1000)
    );
  }

  // Obtiene estudiante por su id
  getStudentById(id: string): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/student/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Method Post Agregar un student
  addStudent(student: StudentForm): Observable<StudentForm>{
    return this.http.post<StudentForm>(`${this.apiUrl}/student`, student);
  }

  // Method Update Actualizar un student
  updateStudent(student: StudentForm): Observable<StudentForm>{
    if (!student.id) throw Error("Student id is required");
    return this.http.patch<StudentForm>(`${this.apiUrl}/student/${student.id}`, student);
  }

  // Eliminar un Estudiante
  deleteStudent(id: number): Observable<boolean>{
    if (!id) throw Error("Student id is required");
    return this.http.delete(`${this.apiUrl}/student/${id}`).pipe(
      map(response => true),
      catchError( error => of(false)),
    );
  }
}
