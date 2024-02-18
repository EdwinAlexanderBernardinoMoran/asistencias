import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Hamlet, SearchHamlet } from '../interfaces/hamlet.interface';
import { Data, HamletForm } from '../interfaces/hamlet-create.interface';

@Injectable({
  providedIn: 'root'
})
export class HamletService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todos los municipios
  getHamlet(): Observable<SearchHamlet>{
    return this.http.get<SearchHamlet>(`${this.apiUrl}/hamlet`).pipe(
      delay(1000)
    )
  }

  // Caserio por ID
  getHamletById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/hamlet/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo caserio
  addHamlet(hamlet: HamletForm): Observable<HamletForm>{
    return this.http.post<HamletForm>(`${this.apiUrl}/hamlet`, hamlet)
  }

  // Actualiza un Caserio
  updateHamlet(hamlet: HamletForm): Observable<HamletForm>{
    if (!hamlet.id) throw Error('Hamlet id is required')
    return this.http.patch<HamletForm>(`${this.apiUrl}/hamlet/${hamlet.id}`, hamlet)
  }

  // Elimina un Caserio
  deleteHamlet(id: number): Observable<boolean>{
    if (!id) throw Error('Hamlet id is required!');
    return this.http.delete(`${this.apiUrl}/hamlet/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }

}
