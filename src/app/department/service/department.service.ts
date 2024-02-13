import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { SearchDepartment } from '../interfaces/department.interface';
import { Data, DepartmentForm } from '../interfaces/department-create.interface';

@Injectable({providedIn: 'root'})
export class DepartmentsService {

  private apiUrl:string = 'http://backendinso.test/api/v1';

  constructor(private http: HttpClient) { }

  // FUNCIONAL
  // obtenerDepartment():Observable<Department[]>{
  //   return this.httpClient.get<{data: Department[]}>(this.apiUrl).pipe(
  //     map((response) => response.data)
  //   )
  // }

  // Obtiene todos los departamentos
  getDepartment():Observable<SearchDepartment>{
    return this.http.get<SearchDepartment>(`${this.apiUrl}/department`).pipe(
      delay(1000)
    )
  }

  // Departamento por ID
  getDepartmentById(id: string): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/department/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo departamento
  addDepartment(department: DepartmentForm): Observable<DepartmentForm>{
    return this.http.post<DepartmentForm>(`${this.apiUrl}/department`, department);
  }

  // Actualiza un departamento
  updateDepartment(department: DepartmentForm): Observable<DepartmentForm>{
    if (!department.id) throw Error("Department id is required")
    return this.http.patch<DepartmentForm>(`${this.apiUrl}/department/${department.id}`, department);
  }

  // Elimina un departamento
  deleteDepartment(id: number): Observable<boolean>{
    if (!id) throw Error('Department id is required');
    return this.http.delete(`${this.apiUrl}/department/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    );
  }

}
