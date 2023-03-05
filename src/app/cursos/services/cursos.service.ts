import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [
    {
      nombre: 'Hatha Yoga',
      comision: 'noche',
      profesor: {
        nombre: 'Alejandra',
        correo: 'alejandra@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Vinyasa Yoga',
      comision: 'noche',
      profesor: {
        nombre: 'Luciana',
        correo: 'luciana@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Ashtanga Vinyasa Yoga',
      comision: 'tarde',
      profesor: {
        nombre: 'Tomás',
        correo: 'tomas@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Yoga para embarazadas',
      comision: 'mañana',
      profesor: {
        nombre: 'Fernanda',
        correo: 'fernada@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$: BehaviorSubject<Curso[]>;

  constructor(){
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }
  }
}
