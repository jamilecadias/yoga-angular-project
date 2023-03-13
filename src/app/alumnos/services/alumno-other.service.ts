import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno'

@Injectable({
  providedIn: 'root'
})
export class AlumnoOtherService {

  private alumnos: Alumno[]=[
    {id:'2', nombre: 'Mariana', apellido: 'Martínez', fechaNac: new Date, curso: 'Hatha Yoga'},
    {id:'3', nombre: 'Pedro', apellido: 'Pérez', fechaNac: new Date, curso: 'Vinyasa Yoga'},
    {id:'4', nombre: 'Catarina', apellido: 'Rodríguez', fechaNac: new Date, curso: 'Yoga para embarazadas'},
    {id:'5', nombre: 'Lucas', apellido: 'Fernández', fechaNac: new Date, curso: 'Ashtanga Vinyasa Yoga'},
  ];

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
