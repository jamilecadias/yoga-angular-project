import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AppRountingModule } from './app-rounting.module';
import { InfoComponent } from './core/components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/components/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    EditarAlumnoDialogComponent,
    NoEncontradoComponent,
    InicioComponent,
    InfoComponent,
    LoginComponent,
    RegistroComponent
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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
