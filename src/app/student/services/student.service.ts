import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { SearchStudent } from '../interfaces/student.interfaces';

@Injectable({providedIn: 'root'})
export class StudentService {

  private apiUrl:string = 'http://backendinso.test/api/v1/student';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<SearchStudent>{
    return this.http.get<SearchStudent>(this.apiUrl).pipe(
      delay(1000)
    );
  }
}
