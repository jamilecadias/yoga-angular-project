import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './core/components/info/info.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion.guard';



const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', children: [
    {path: 'info', component: InfoComponent}
  ]},

  {path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
  canLoad: [SesionGuard]
},

{path: 'alumnos',
  loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
  canLoad: [SesionGuard]

},
{
  path: 'auth',
  loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)
},

  {path:'**', component: NoEncontradoComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
