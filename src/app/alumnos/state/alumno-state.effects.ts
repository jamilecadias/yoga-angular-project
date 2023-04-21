import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Alumno } from "src/app/models/alumno";
import { AlumnosService } from "../services/alumnos.service";
import { agregarAlumnoState, cargarAlumnoState, alumnosCargados, editarAlumnoState, eliminarAlumnoState } from "./alumno-state.actions";

@Injectable()
export class AlumnosEffects{
    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe( // Obserable2
            ofType(cargarAlumnoState),
            concatMap(() => {
                return this.alumnos.obtenerAlumnos().pipe( // Obsaervable1
                    map((c: Alumno[]) => alumnosCargados({ alumnos: c }))
                )
            })
        )
    });
    agregarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.agregarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.snackBar.open(`${alumno.nombre} agregado satisfactoriamente`);
                        this.router.navigate(['alumnos/listar']);
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });
    elimninarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(eliminarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.eliminarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });

    editarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.editarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });

    constructor(
        private alumnos: AlumnosService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}
