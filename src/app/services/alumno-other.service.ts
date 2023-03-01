import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno'

@Injectable({
  providedIn: 'root'
})
export class AlumnoOtherService {

  private alumnos: Alumno[]=[
    {nombre: 'Mariana', apellido: 'Martínez', curso: 'Hatha Yoga'},
    {nombre: 'Pedro', apellido: 'Pérez', curso: 'Vinyasa Yoga'},
    {nombre: 'Catarina', apellido: 'Rodríguez', curso: 'Yoga para embarazadas'},
    {nombre: 'Lucas', apellido: 'Fernández', curso: 'Ashtanga Vinyasa Yoga'},
  ]

  constructor() { }

  obtenerAlumno(): Array<Alumno>{
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno){
    alumno.nombre = 'Alumno-other-service';
    this.alumnos.push(alumno);
    console.log('alumno agregado', this.alumnos);
  }
}
