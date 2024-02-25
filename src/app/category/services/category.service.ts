import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, delay, map, of } from 'rxjs';

import { SearchCategory } from '../interfaces/category.interface';
import { CategoryForm, Data } from '../interfaces/category-create.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = 'http://backendinso.test/api/v1';
  constructor(private http: HttpClient) { }

  // Obtiene todas las categorias
  getCategory(): Observable<SearchCategory>{
    return this.http.get<SearchCategory>(`${this.apiUrl}/category`).pipe(
      delay(200)
    )
  }

  // Category por ID
  getCategoryById(id: number): Observable<Data | undefined>{
    return this.http.get<Data>(`${this.apiUrl}/category/${id}`).pipe(
      catchError(error => of((undefined)))
    )
  }

  // Crea una nueva categoria
  addCategory(category: CategoryForm): Observable<CategoryForm>{
    return this.http.post<CategoryForm>(`${this.apiUrl}/category`, category)
  }

  // Actualiza una categoria
  updateCategory(category: CategoryForm): Observable<CategoryForm>{
    if(!category.id) throw Error('Category id is required');
    return this.http.patch<CategoryForm>(`${this.apiUrl}/category/${category.id}`, category)
  }

  // Elimina una categoria
  deleteCategory(id: number): Observable<boolean>{
    if (!id) throw Error('Category id is required');
    return this.http.delete(`${this.apiUrl}/category/${id}`).pipe(
      map(response => true),
      catchError(error => of((false)))
    )
  }
}
