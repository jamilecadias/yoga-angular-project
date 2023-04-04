import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

const routes: Routes = [
  { path: '', component: CursosInicioComponent, canActivateChild: [SesionGuard], children: [
 /*  { path: '', canActivateChild: [SesionGuard],children: [ */
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent, canActivate: [] },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [] },
    /* { path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard] },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] }, */
    { path: 'detalle', component: DetalleCursoComponent },
    { path: 'tabla', component: TablaCursosComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
