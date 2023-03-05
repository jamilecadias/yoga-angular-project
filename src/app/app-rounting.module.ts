import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InfoComponent } from './core/components/info/info.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './cursos/components/tabla-cursos/tabla-cursos.component';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';



const routes: Routes = [
  {path: 'cursos', children: [
    {path: 'listar', component: ListaCursosComponent},
    {path: 'tabla', component: TablaCursosComponent},
    {path: 'agregar', component: AgregarCursoComponent}
  ] },

  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', children: [
    {path: 'info', component: InfoComponent}
  ]},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'**', component: NoEncontradoComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }

