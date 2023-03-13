import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRountingModule } from './app-rounting.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRountingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CursosModule,
    CoreModule,
    AlumnosModule,
    AutenticacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
