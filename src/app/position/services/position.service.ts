import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchPosition } from '../interfaces/position.interface';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Data, PositionForm } from '../interfaces/position-create.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private apiUrl: string = 'http://backendinso.test/api/v1'
  constructor(private http: HttpClient) { }

  // Obtiene todas los cargos de profesores
  getPosition(): Observable<SearchPosition>{
    return this.http.get<SearchPosition>(`${this.apiUrl}/position`).pipe(
      delay(200)
    )
  }

  // Position por ID
  getPositionById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/position/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  // Crea un nuevo cargo de profesor
  addPosition(position: PositionForm): Observable<PositionForm>{
    return this.http.post<PositionForm>(`${this.apiUrl}/position`, position)
  }

  // Actualiza un cargo de profesor
  updatePosition(position: PositionForm): Observable<PositionForm>{
    if(!position.id) throw Error('Position id is required');
    return this.http.patch<PositionForm>(`${this.apiUrl}/position/${position.id}`, position)
  }

  // Elimina un cargo de profesor
  deletePosition(id: number): Observable<boolean>{
    if (!id) throw Error('Position id is required');
    return this.http.delete(`${this.apiUrl}/position/${id}`).pipe(
      map(response => true),
      catchError(error => of(false)),
    )
  }

}
