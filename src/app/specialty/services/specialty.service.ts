import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchSpecialty } from '../interfaces/specialty.interface';
import { Data, SpecialtyForm } from '../interfaces/specialty-create.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todas las especialidades
  getSpecialty(): Observable<SearchSpecialty>{
    return this.http.get<SearchSpecialty>(`${this.apiUrl}/specialty`).pipe(
      delay(1000)
    )
  }

  // Departamento por ID
  getSpecialtyById(id: string): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/specialty/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea una nueva especialidad
  addSpecialty(specialty: SpecialtyForm): Observable<SpecialtyForm>{
    return this.http.post<SpecialtyForm>(`${this.apiUrl}/specialty`, specialty)
  }

  // Actualiza una Specialidad
  updateSpecialty(specialty: SpecialtyForm): Observable<SpecialtyForm>{
    if(!specialty.id) throw Error('Specialty id is required');
    return this.http.patch<SpecialtyForm>(`${this.apiUrl}/specialty/${specialty.id}`, specialty)
  }

  // Elimina una Specialidad
  deleteSpecialty(id: number): Observable<boolean>{
    if (!id) throw Error('Specialty id is required');
    return this.http.delete(`${this.apiUrl}/specialty/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }
}
