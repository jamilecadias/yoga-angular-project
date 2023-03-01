import { Injectable } from '@angular/core';
import { Alumno } from "src/app/models/alumno";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  obtenerAlumnos() {
    throw new Error('Method not implemented.');
  }

  private alumnos: Alumno[]=[
    {nombre: 'Mariana', apellido: 'Martínez', curso: 'Hatha Yoga'},
    {nombre: 'Pedro', apellido: 'Pérez', curso: 'Vinyasa Yoga'},
    {nombre: 'Catarina', apellido: 'Rodríguez', curso: 'Yoga para embarazadas'},
    {nombre: 'Lucas', apellido: 'Fernández', curso: 'Ashtanga Vinyasa Yoga'},
  ];

  getAlumno(){
    return this.alumnos.slice();
  }

  private alumnos$!: BehaviorSubject<Alumno[]>;


  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);

    of(this.alumnos).pipe(
      map((alumnos: Alumno[]) => {
        return alumnos.filter((alumno: Alumno) => alumno.curso == 'Hatha Yoga')
      })
    ).subscribe((alumnos)=>{
      console.log("Obtenido desde el of, filtrado por curso de alumno ", alumnos);
    });

    of(this.alumnos).pipe(
      mergeMap((alumnos: Alumno[]) => {
        return interval(5000).pipe(map((i => {
          return {
            nombre: alumnos[i].nombre,
            apellido: alumnos[i].apellido,
            estatus: alumnos[i].curso
          }
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap', datos));

   }

   obtenerAlumnosPromise(): Promise<Alumno[]>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject([]);
      }
    });
  }

  obtenerAlumnosObservable(): Observable<Alumno[]>{
    return this.alumnos$.asObservable();
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.unshift(alumno);
    this.alumnos$.next(this.alumnos);
    console.log('Alumno agregado', this.alumnos);
  }



}
