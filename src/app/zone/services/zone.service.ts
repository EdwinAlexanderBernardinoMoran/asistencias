import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchZone } from '../interfaces/zone.interface';
import { Data, ZoneForm } from '../interfaces/zone-create.interface';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todos las zonas
  getZone(): Observable<SearchZone>{
    return this.http.get<SearchZone>(`${this.apiUrl}/zone`).pipe(
      delay(1000)
    )
  }

  // Zone por ID
  getZoneById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/zone/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea una zona
  addZone(zone: ZoneForm): Observable<ZoneForm>{
    return this.http.post<ZoneForm>(`${this.apiUrl}/zone`, zone)
  }

  // Actualiza una zona
  updateZone(zone: ZoneForm): Observable<ZoneForm>{
    if (!zone.id) throw Error('Zone id is required!')
    return this.http.patch<ZoneForm>(`${this.apiUrl}/zone/${zone.id}`, zone)
  }

  // Elimina una zona
  deleteZone(id: number): Observable<boolean>{
    if (!id) throw Error('Zone id is required');
    return this.http.delete(`${this.apiUrl}/zone/${id}`).pipe(
      map(response => true),
      catchError(error => of(false))
    )
  }
}
