import { Component, OnInit } from '@angular/core';
import { DepartmentsServices } from '../../service/department.service';
import { Department, Links, SearchDepartment } from '../../interfaces/department.interface';

@Component({
  selector: 'app-home-department-page',
  templateUrl: './home-department-page.component.html',
  styleUrls: ['./home-department-page.component.css']
})
export class HomeDepartmentPageComponent implements OnInit{
  public departments: Department[] = [];
  public links: Links | null = null;

  constructor(private homeDepartment: DepartmentsServices){}
  ngOnInit(): void {

    // Funcion Stable
    // this.homeDepartment.obtenerDepartment().subscribe( (data) => {
    //   console.log(data);links: Links | null = null;
    //   this.departments = data;
    // })

    this.homeDepartment.obtenerDepartment().subscribe( (response: SearchDepartment) => {
      this.departments = response.data;
      this.links = response.links;
    })
  }
}
