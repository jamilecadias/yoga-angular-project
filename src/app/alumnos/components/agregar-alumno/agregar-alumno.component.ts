import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app//models/curso';


@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})

export class AgregarAlumnoComponent implements OnInit{
  formulario!: FormGroup;
  alumnos: Alumno[] = [];
  cursos: Curso[] = []

  constructor(
    private router: Router,
   /*  private AlumnoService: AlumnosService, */

  ){}

  ngOnInit(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl(),
      fechaNac: new FormControl(),
      curso: new FormControl()
    })
  }

  agregarAlumno(){
    console.log(this.formulario.value);
    let alumno: Alumno = {
      id: '1',
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechaNac: this.formulario.value.fechaNac,
      curso: this.formulario.value.curso,
    }
    this.alumnos.push(alumno);
  }
}
/* export class AgregarAlumnoComponent {
formulario: FormGroup<any>;
agregarAlumno() {
throw new Error('Method not implemented.');
}
fechaNac: MatDatepickerPanel<MatDatepickerControl<any>,any,any>;
alumnos: any;

}
 */
