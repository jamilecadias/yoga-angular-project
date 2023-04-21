import { Action, createReducer, on } from '@ngrx/store';
import { Alumno } from '../../models/alumno';
import * as AlumnoStateActions from './alumno-state.actions';

export const alumnoStateFeatureKey = 'alumnoState';

export interface AlumnoState {
  cargando: boolean;
  alumnos: Alumno[];
}

export const initialState: AlumnoState = {
  cargando: false,
  alumnos: []
};

export const reducer = createReducer(
  initialState,
  on(AlumnoStateActions.cargarAlumnoState, (state) => {
    return {...state, cargando: true};
  }),
  on(AlumnoStateActions.alumnosCargados, (state, { alumnos }) => {
    return {...state, cargando: false, alumnos};
  }),
  on(AlumnoStateActions.agregarAlumnoState, (state, { alumno: alumno }) => {
    return state;
  }),
  on(AlumnoStateActions.editarAlumnoState, (state, { alumno: alumno }) => {
    return state;
  }),
  on(AlumnoStateActions.eliminarAlumnoState, (state, { alumno: alumno }) => {
    return state;
  }),
);

