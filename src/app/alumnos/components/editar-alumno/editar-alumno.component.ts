import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/core/services/curso.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { AlumnosService } from '../../services/alumnos.service';
import { editarAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit{
  formulario!: FormGroup;
  cursos$!: Observable<Curso[]>;

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private cursos: CursoService,
    private dialogRef: MatDialogRef<EditarAlumnoComponent>,
    private store: Store<AlumnoState>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ){}

  ngOnInit(): void {
    this.cursos$ = this.cursos.obtenerCursos();
    this.formulario = new FormGroup({
      email: new FormControl(this.alumno.email),
      fechaNac: new FormControl(this.alumno.fechaNac),
      alumnoActivo: new FormControl(this.alumno.alumnoActivo),
      nombre: new FormControl(this.alumno.nombre),
      curso: new FormControl(this.alumno.curso)
    })
  }

  editarAlumno(){
    let alumno: Alumno = {
      id: this.alumno.id,
      nombre: this.formulario.value.nombre,
      email: this.formulario.value.email,
      fechaNac: this.formulario.value.fechaInicio,
      alumnoActivo: this.formulario.value.alumnoActivo,
      curso: this.formulario.value.curso
    };

    this.store.dispatch(editarAlumnoState({alumno: alumno}));
    this.dialogRef.close(alumno);
  }
}

