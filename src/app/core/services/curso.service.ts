import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`)
  }
}
