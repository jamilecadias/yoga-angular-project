import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoService } from './services/alumno.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
/* import { AlumnoOtherService } from './services/alumno-other.service'; */



@NgModule({
  declarations: [
    AlumnosComponent,
    AgregarAlumnoComponent,
    EditarAlumnoDialogComponent,

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnoService
   /*  AlumnoOtherService */
  ]
})
export class AlumnosModule { }
