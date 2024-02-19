import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchSection } from '../interfaces/section.interface';
import { Data, SectionForm } from '../interfaces/section-create.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http:HttpClient) { }

  // Obtiene todos las Secciones
  getSection(): Observable<SearchSection>{
    return this.http.get<SearchSection>(`${this.apiUrl}/section`).pipe(
      delay(1000)
    )
  }

  // Section por ID
  getSectionById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/section/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea una nueva Section
  addSection(section: SectionForm): Observable<SectionForm>{
    return this.http.post<SectionForm>(`${this.apiUrl}/section`, section)
  }

  // Actualiza una Section
  updateSection(section: SectionForm): Observable<SectionForm>{
    if (!section.id) throw Error('Section id is required')
    return this.http.patch<SectionForm>(`${this.apiUrl}/section/${section.id}`, section)
  }

  // Elimina una Section
  deleteSection(id: number): Observable<boolean>{
    if (!id) throw Error('Section id is required')
    return this.http.delete(`${this.apiUrl}/section/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }

}
