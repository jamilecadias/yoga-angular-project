import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/core/services/curso.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { AlumnosService } from '../../services/alumnos.service';
import { agregarAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{
  formulario!: FormGroup;
  cursos$!: Observable<Curso[]>;

  constructor(
    private router: Router,
    private alumnoService: AlumnosService,
    private cursos: CursoService,
    private store: Store<AlumnoState>
  ){}

  ngOnInit(): void {
    this.cursos$ = this.cursos.obtenerCursos();
    this.formulario = new FormGroup({
      email: new FormControl(''),
      fechaNac: new FormControl(''),
      alumnoActivo: new FormControl(false),
      nombre: new FormControl(''),
      curso: new FormControl({})
    })
  }

  agregarAlumno(){
    let alumno: Alumno = {
      id: '',
      nombre: this.formulario.value.nombre,
      email: this.formulario.value.email,
      fechaNac: this.formulario.value.fechaNac,
      alumnoActivo: this.formulario.value.alumnoActivo,
      curso: this.formulario.value.curso
    }
    this.store.dispatch(agregarAlumnoState({ alumno: alumno }));
  }
}


