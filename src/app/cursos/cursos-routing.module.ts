import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

const routes: Routes = [
  { path: 'cursos', children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent },
    { path: 'agregar', component: AgregarCursoComponent },
    { path: 'detalle', component: DetalleCursoComponent },
    { path: 'tabla', component: TablaCursosComponent },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
