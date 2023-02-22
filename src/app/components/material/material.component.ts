import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  alumnos: Alumno[] = [
    {nombre: 'Mariana', apellido: 'Martínez', curso: 'Hatha Yoga'},
    {nombre: 'Pedro', apellido: 'Pérez', curso: 'Vinyasa Yoga'},
    {nombre: 'Catarina', apellido: 'Rodríguez', curso: 'Yoga para embarazadas'},
    {nombre: 'Lucas', apellido: 'Fernández', curso: 'Ashtanga Vinyasa Yoga'},
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['nombre', 'apellido', 'curso', 'acciones'];
  alumno!: Alumno;

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(alumno: Alumno){
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: alumno
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);

      if(result.mode === 'editar'){

      }
    })
  }
  agregarAlumno(){
    const emptyElement: Alumno ={
      nombre: '',
      apellido: '',
      curso: ''
    }
    const dialogRef= this.dialog.open(EditarAlumnoDialogComponent,{data: emptyElement})
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
    })
  }
}
