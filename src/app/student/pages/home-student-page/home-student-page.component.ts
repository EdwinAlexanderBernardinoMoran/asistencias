import { Component, OnInit } from '@angular/core';
import { Links, SearchStudent, Student } from '../../interfaces/student.interfaces';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'student-home-student-page',
  templateUrl: './home-student-page.component.html',
  styleUrls: ['./home-student-page.component.css']
})
export class HomeStudentPageComponent implements OnInit {

  public student: Student[] = [];
  public links: Links | null = null;

  constructor(private homeStudent: StudentService){}

  ngOnInit(): void {
    this.homeStudent.getStudent().subscribe(
      (response: SearchStudent) => {
        this.student = response.data;
        this.links = response.links;
      }
    )
  }

}
