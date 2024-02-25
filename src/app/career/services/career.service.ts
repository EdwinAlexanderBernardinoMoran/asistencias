import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchCareer } from '../interfaces/career.interface';
import { CareerForm, Data } from '../interfaces/career-create.interface';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todas las career de profesores
  getCareer(): Observable<SearchCareer>{
    return this.http.get<SearchCareer>(`${this.apiUrl}/career`).pipe(
      delay(200)
    );
  }

  // Career por ID
  getCareerById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/career/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // crea un nuevo career
  addCareer(career: CareerForm): Observable<CareerForm>{
    return this.http.post<CareerForm>(`${this.apiUrl}/career`, career)
  }

  // Actualiza un career
  updateCareer(career: CareerForm): Observable<CareerForm>{
    if(!career.id) throw new Error('Career id is required');
    return this.http.patch<CareerForm>(`${this.apiUrl}/career/${career.id}`,career)
  }

  // Elimina un career
  deleteCareer(id: number): Observable<boolean>{
    if (!id) throw new Error('Career id is required');
    return this.http.delete(`${this.apiUrl}/career/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }
}
