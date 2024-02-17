import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchCanton } from '../interfaces/canton.interface';
import { CantonForm, Data } from '../interfaces/canton-create.interface';

@Injectable({
  providedIn: 'root'
})
export class CantonService {

  private apiUrl: string = 'http://backendinso.test/api/v1';
  constructor(private http: HttpClient) { }

  // Obtiene todos los cantones
  getCanton(): Observable<SearchCanton>{
    return this.http.get<SearchCanton>(`${this.apiUrl}/canton`).pipe(
      delay(1000)
    )
  }

  // Canton por ID
  getCantonById(id: string): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/canton/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo canton
  addCanton(canton: CantonForm): Observable<CantonForm>{
    return this.http.post<CantonForm>(`${this.apiUrl}/canton`, canton);
  }

  // Actualiza una Nacionalidad
  updateCanton(canton: CantonForm): Observable<CantonForm>{
    if (!canton.id) throw Error("Canton id is required")
    return this.http.patch<CantonForm>(`${this.apiUrl}/canton/${canton.id}`, canton);
  }

  // Elimina un canton
  deleteCanton(id: number): Observable<boolean>{
    if (!id) throw Error('Canton id is required');
    return this.http.delete(`${this.apiUrl}/canton/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }

}
