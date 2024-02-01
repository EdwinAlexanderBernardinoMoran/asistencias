import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, of } from 'rxjs';
import { SearchStudent, Student } from '../interfaces/student.interfaces';

@Injectable({providedIn: 'root'})
export class StudentService {

  private apiUrl:string = 'http://backendinso.test/api/v1/student';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<SearchStudent>{
    return this.http.get<SearchStudent>(this.apiUrl).pipe(
      delay(1000)
    );
  }

  getStudentById(id: string): Observable<Student | undefined>{
    return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }
}
