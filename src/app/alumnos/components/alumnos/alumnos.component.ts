import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AlumnoService } from 'src/app/alumnos/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {
  alumnos: Alumno[] = [
    {nombre: 'Mariana', apellido: 'Martínez', curso: 'Hatha Yoga'},
    {nombre: 'Pedro', apellido: 'Pérez', curso: 'Vinyasa Yoga'},
    {nombre: 'Catarina', apellido: 'Rodríguez', curso: 'Yoga para embarazadas'},
    {nombre: 'Lucas', apellido: 'Fernández', curso: 'Ashtanga Vinyasa Yoga'},
  ];
  alumnos$!: Observable<Alumno[]>;

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['nombre', 'apellido', 'curso', 'acciones'];
  alumno!: Alumno;

  suscripcion!: Subscription;


  constructor(
    private dialog: MatDialog,
    private _alumnoService: AlumnoService
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

  ngOnInit(): void {

    // console.log("Instanciando MatTAbleDataSource");
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this._alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      // console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
    });
    // console.log("Ultima linea del ngOnInit");
    this.alumnos$ = this._alumnoService.obtenerAlumnosObservable();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}
