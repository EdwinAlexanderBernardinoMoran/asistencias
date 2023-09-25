import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Department, Links, SearchDepartment } from '../interfaces/department.interface';

@Injectable({providedIn: 'root'})
export class DepartmentsServices {

  // public departments: Department[] = []
  // public departmentsLinks!: Links;
  private apiUrl:string = 'http://backendinso.test/api/v1/department';

  constructor(private httpClient: HttpClient) { }

  // FUNCIONAL
  // obtenerDepartment():Observable<Department[]>{
  //   return this.httpClient.get<{data: Department[]}>(this.apiUrl).pipe(
  //     map((response) => response.data)
  //   )
  // }

  obtenerDepartment():Observable<SearchDepartment>{
    return this.httpClient.get<SearchDepartment>(this.apiUrl)
  }

}
