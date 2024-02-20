import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  url?: string;
  icon?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  // Alumnos
  {
    name: 'Alumnos',
    children: [{name: 'Listado', url: '/students/list', icon: 'assignment_ind'}, {name: 'Nuevo', url: '/students/new-student', icon: 'person_add'}, {name: 'Codigo De Barras', url: '', icon: 'assessment'}],
  },

  // Matriculas
  {
    name: 'Matriculas',
    children: [{name: 'Listado', url: '', icon: 'assignment'}, {name: 'Nuevo', url: '', icon: 'person_add'}, {name: 'Registros', url: '', icon: 'assignment'}, {name: 'C. De Matricula', url: '', icon: 'assignment_turned_in'}],
  },

  // Asistencias
  {
    name: 'Asistencias',
    children: [{name: 'Asistencia', url: '', icon: 'event_note'}]
  },

  // Profesores
  {
    name: 'Profesores',
    children: [{name: 'Listado', url: '', icon: 'assignment_ind'}, {name: 'Nuevo', url: '', icon: 'person_add'}, {name: 'Cargo Profesores', url: '', icon: 'class'}, {name: 'Categoria Profesores', url: '', icon: 'dns'}, {name: 'Especialidad Profesores', url: '', icon: 'drag_handle'}]
  },

  // Mantenimientos
  {
    name: 'Mantenimientos',
    children: [{name: 'Nacionalidad', url: '/nationalities/list', icon: 'accessibility'}, {name: 'Departamento', url: '/departments/list', icon: 'my_location'}, {name: 'Municipio', url: '/municipalities/list', icon: 'person_pin_circle'}, {name: 'Cantones', url: '/cantones/list', icon: 'room'}, {name: 'Caserios', url: '/hamlets/list', icon: 'account_balance'}, {name: 'Zona', url: '/zones/list', icon: 'pin_drop'}, {name: 'Especialidad', url: '/specialties/list', icon: 'school'}, {name: 'Secciones', url: '/sections/list', icon: 'book'}, {name: 'Centro Escolar', url: '/schoolcenters/list', icon: 'business'}]
  }
];

@Component({
  selector: 'layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']

})
export class LayoutAdminComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
