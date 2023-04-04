import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

export const cargarSesion = createAction(
  '[Auth] Sesion cargada',
  props<{ sesion: Sesion }>()
);



export function cargarAuths(cargarAuths: any): import("rxjs").OperatorFunction<import("@ngrx/store").Action, any> {
  throw new Error('Function not implemented.');
}

