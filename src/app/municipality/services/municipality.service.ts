import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { SearchMunicipality } from '../interfaces/municipality.interface';
import { Data, MunicipalityForm } from '../interfaces/municipality-create.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todos los municipios
  getMunicipality(): Observable<SearchMunicipality>{
    return this.http.get<SearchMunicipality>(`${this.apiUrl}/municipality`).pipe(
      delay(1000)
    )
  }

  // Municipio por ID
  getMunicipalityById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/municipality/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo municipio
  addMunicipality(municipality: MunicipalityForm): Observable<MunicipalityForm>{
    return this.http.post<MunicipalityForm>(`${this.apiUrl}/municipality`, municipality);
  }

  // Actualiza una Municipio
  updateMunicipality(municipality: MunicipalityForm): Observable<MunicipalityForm>{
    if (!municipality.id) throw Error("Municipality id is required")
    return this.http.patch<MunicipalityForm>(`${this.apiUrl}/municipality/${municipality.id}`, municipality);
  }

  // Elimina un Municipiio
  deleteMunicipality(id: number): Observable<boolean>{
    if (!id) throw Error('Municipality id is required');
    return this.http.delete(`${this.apiUrl}/municipality/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }
}
