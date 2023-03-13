import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from "src/app/models/alumno";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  /* obtenerAlumnos() {
    throw new Error('Method not implemented.');
  } */

  private alumnos: Alumno[]=[
    {id:'2', nombre: 'Mariana', apellido: 'Martínez', fechaNac: new Date, curso: 'Hatha Yoga'},
    {id:'3', nombre: 'Pedro', apellido: 'Pérez', fechaNac: new Date, curso: 'Vinyasa Yoga'},
    {id:'4', nombre: 'Catarina', apellido: 'Rodríguez', fechaNac: new Date, curso: 'Yoga para embarazadas'},
    {id:'5', nombre: 'Lucas', apellido: 'Fernández', fechaNac: new Date, curso: 'Ashtanga Vinyasa Yoga'},
  ];

  getAlumno(){
    return this.alumnos.slice();
  }

  private alumnos$!: BehaviorSubject<Alumno[]>;


  constructor(private http: HttpClient) {
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

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>('https://6407c9642f01352a8a83d845.mockapi.io/alumnos');

  /*a gregarAlumno(alumno: Alumno){
    this.alumnos.unshift(alumno);
    this.alumnos$.next(this.alumnos);
    console.log('Alumno agregado', this.alumnos);
  } */



}
}
