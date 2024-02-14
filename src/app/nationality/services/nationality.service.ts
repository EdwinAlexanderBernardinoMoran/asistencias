import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchNationality } from '../interfaces/nationality.interface';
import { Data, NationalityForm } from '../interfaces/nationality-create.interface';

@Injectable({providedIn: 'root'})
export class NationalityService {
  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todos las nacionalidades
  getNationality(): Observable<SearchNationality>{
    return this.http.get<SearchNationality>(`${this.apiUrl}/nationality`).pipe(
      delay(1000)
    )
  }

  // Nacionalidad por ID
  getNationalityById(id: string): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/nationality/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea una nueva nacionalidad
  addNationality(nationality: NationalityForm): Observable<NationalityForm>{
    return this.http.post<NationalityForm>(`${this.apiUrl}/nationality`, nationality);
  }

  // Actualiza una Nacionalidad
  updateNationality(nationality: NationalityForm): Observable<NationalityForm>{
    if (!nationality.id) throw Error("Nationality id is required")
    return this.http.patch<NationalityForm>(`${this.apiUrl}/nationality/${nationality.id}`, nationality);
  }

  // Elimina una nacionalidad
  deleteNationality(id: number): Observable<boolean>{
    if (!id) throw Error('Nationality id is required');
    return this.http.delete(`${this.apiUrl}/nationality/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }
}
