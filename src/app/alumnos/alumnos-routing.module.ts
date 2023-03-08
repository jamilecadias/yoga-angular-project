import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';


const routes: Routes = [
  { path: '', children: [
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'editar', component: EditarAlumnoDialogComponent },
    { path: 'agregar', component: AgregarAlumnoComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
