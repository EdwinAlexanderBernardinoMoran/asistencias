import { AfterViewInit, Component } from '@angular/core';

let M: any;

@Component({
  selector: 'app-create-department-page',
  templateUrl: './create-department-page.component.html',
  styleUrls: ['./create-department-page.component.css']
})
export class CreateDepartmentPageComponent implements AfterViewInit{
  ngAfterViewInit() {
    M.AutoInit(); // Inicializar los componentes de MaterializeCSS
  }
  }



