import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from "src/app/models/alumno";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
 
  private alumnos: Alumno[]=[
    {id:'2', nombre: 'Mariana', apellido: 'Martínez', email:'mariana@gmail.com', fechaNac: new Date, curso: 'Hatha Yoga'},
    {id:'3', nombre: 'Pedro', apellido: 'Pérez', email:'pedro@gmail.com',fechaNac: new Date, curso: 'Vinyasa Yoga'},
    {id:'4', nombre: 'Catarina', apellido: 'Rodríguez', email:'catarina@gmail.com',fechaNac: new Date, curso: 'Yoga para embarazadas'},
    {id:'5', nombre: 'Lucas', apellido: 'Fernández', email:'lucas@gmail.com',fechaNac: new Date, curso: 'Ashtanga Vinyasa Yoga'},
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
      (alumnos);
    });

    of(this.alumnos).pipe(
      mergeMap((alumnos: Alumno[]) => {
        return interval(5000).pipe(map((i => {
          return {
            nombre: alumnos[i].nombre,
            apellido: alumnos[i].apellido,
            email: alumnos[i].email,
            estatus: alumnos[i].curso
          }
        })));
      })
    ).subscribe((datos) => (datos));

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
}
}
