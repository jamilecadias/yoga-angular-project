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
      email: new FormControl(),
      fechaNac: new FormControl(),
      curso: new FormControl()
    })
  }

  agregarAlumno(){
    (this.formulario.value);
    let alumno: Alumno = {
      id: '1',
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      fechaNac: this.formulario.value.fechaNac,
      curso: this.formulario.value.curso,
    }
    this.alumnos.push(alumno);
  }
}
