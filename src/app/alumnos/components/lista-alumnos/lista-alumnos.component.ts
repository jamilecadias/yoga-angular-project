import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Alumno } from 'src/app/models/alumno';
import { Sesion } from 'src/app/models/sesion';
import { cargarAlumnoState, alumnosCargados, eliminarAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';
import { selectCargandoAlumnos, selectAlumnosCargados } from '../../state/alumno-state.selectors';
import { AlumnosService } from '../../services/alumnos.service';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<AlumnoState>,
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoAlumnos);

    this.alumnos$ = this.store.select(selectAlumnosCargados);
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarAlumno(alumno: Alumno){
    this.snackBar.open(`${alumno.nombre} eliminado satisfactoriamente`);
    this.store.dispatch(eliminarAlumnoState({ alumno }));
  }

  abrirDialog(alumno: Alumno){
    this.dialog.open(EditarAlumnoComponent, {
      data: alumno
    }).afterClosed().subscribe((alumno: Alumno) => {
      this.snackBar.open(`${alumno.nombre} editado satisfactoriamente`)
      this.alumnos$ = this.alumnoService.obtenerAlumnos();
    });
  }
}

