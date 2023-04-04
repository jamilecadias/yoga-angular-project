import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
    AutenticacionModule,
   StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
