import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


const routes: Routes = [
    { path: '', canActivateChild: [SesionGuard],children: [
    { path: 'listar', component: ListaAlumnosComponent },
    { path: 'editar', component: EditarAlumnoComponent, canActivate: [] },
    { path: 'agregar', component: AgregarAlumnoComponent, canActivate: [] },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }


