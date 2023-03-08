import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';

const routes: Routes = [
  {path: '', component: AutenticacionInicioComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
