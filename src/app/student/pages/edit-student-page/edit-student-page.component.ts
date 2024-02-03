import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'student-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.css']
})
export class EditStudentPageComponent implements OnInit{


  public student?: Student;

  constructor(
    private studentService: StudentService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({id}) => this.studentService.getStudentById(id))
    ).subscribe(
      student => {
        // if(!student) return this.router.navigate(['/student/list'])
        console.log(student);

        return this.student = student;
      }
    )
  }

}
