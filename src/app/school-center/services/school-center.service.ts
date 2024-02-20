import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchSchoolCenter } from '../interfaces/school_center.interface';
import { Data, SchoolCenterForm } from '../interfaces/school-center-create.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolCenterService {

  private apiUrl: string = 'http://backendinso.test/api/v1';
  constructor(private http: HttpClient) { }

  // Obtiene todos los centrosescolares
  getSchoolCenter(): Observable<SearchSchoolCenter>{
    return this.http.get<SearchSchoolCenter>(`${this.apiUrl}/school_center`).pipe(
      delay(1000)
    )
  }

  // Centro Escolar por ID
  getSchoolCenterById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/school_center/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo Centro Escolar
  addSchoolCenter(schoolCenter: SchoolCenterForm): Observable<SchoolCenterForm>{
    return this.http.post<SchoolCenterForm>(`${this.apiUrl}/school_center`, schoolCenter)
  }

  // Actualiza un Centro Escolar
  updateSchoolCenter(schoolCenter: SchoolCenterForm): Observable<SchoolCenterForm>{
    if (!schoolCenter.id) throw Error('SchoolCenter id is required')
    return this.http.patch<SchoolCenterForm>(`${this.apiUrl}/school_center/${schoolCenter.id}`, schoolCenter)
  }

  // Elimina un Centro Escolar
  deleteSchoolCenter(id: number): Observable<boolean>{
    if (!id) throw Error('SchoolCenter id is required!');
    return this.http.delete(`${this.apiUrl}/school_center/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }

}
