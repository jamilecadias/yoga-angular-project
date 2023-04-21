import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { alumnoStateFeatureKey, reducer } from './state/alumno-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/alumno-state.effects';


@NgModule({
  declarations: [
    AgregarAlumnoComponent,
    ListaAlumnosComponent,
    EditarAlumnoComponent,

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule ,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }

