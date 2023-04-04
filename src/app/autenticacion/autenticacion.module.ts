import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './state/auth.reducer';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ]
})
export class AutenticacionModule { }
