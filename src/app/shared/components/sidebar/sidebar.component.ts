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
    children: [{name: 'Listado', url: 'student', icon: 'assignment_ind'}, {name: 'Nuevo', url: 'student/create-student', icon: 'person_add'}, {name: 'Codigo De Barras', url: '', icon: 'assessment'}],
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
    children: [{name: 'Nacionalidad', url: '', icon: 'accessibility'}, {name: 'Departamento', url: '', icon: 'my_location'}, {name: 'Municipio', url: '', icon: 'person_pin_circle'}, {name: 'Cantones', url: '', icon: 'room'}, {name: 'Caserios', url: '', icon: 'account_balance'}, {name: 'Zona', url: '', icon: 'pin_drop'}, {name: 'Especialidad', url: '', icon: 'school'}, {name: 'Secciones', url: '', icon: 'book'}, {name: 'Centro Escolar', url: '', icon: 'business'}]
  }
];

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
