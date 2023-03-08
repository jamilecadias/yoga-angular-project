import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    NoEncontradoComponent,
    InicioComponent,
    InfoComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    NoEncontradoComponent,
    InicioComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
