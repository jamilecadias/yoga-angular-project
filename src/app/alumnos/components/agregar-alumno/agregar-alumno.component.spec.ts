import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { alumnos } from '../../services/alumno.data';
import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('Pruebas unitarias de lsita-cursos-component', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene cuando dejamos los campos requeridos vacios', ()=>{
    const formulario = component.formulario;
    const apellido = formulario.controls["apellido"];

    apellido.setValue('Pérez');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario cambia a VALID cuando ingresamos el campo nombre', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];

    nombre.setValue('Aline');

    expect(nombre.valid).toBeTrue();
  });

  it('La informacion del formulario se agrega al arreglo de alumnos', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const apellido= formulario.controls["apellido"];
    const fechaNac = formulario.controls["fechaNac"];
    const curso = formulario.controls["curso"];
    const fechaPrueba = new Date();

    nombre.setValue('Aline');
    apellido.setValue('Pérez');
    fechaNac.setValue(fechaPrueba);
    curso.setValue("Hatha Yoga");

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();
    
    fixture.detectChanges();

    const alumnos = component.alumnos;

    console.log(alumnos);
    expect(alumnos[alumnos.length-1]).toEqual({
      id: "1",
      nombre: 'Aline',
      apellido: 'Pérez',
      fechaNac: fechaPrueba,
      curso: 'Hatha Yoga'
    });
  });

  it('Los alumnos se renderizan correctamente', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const apellido = formulario.controls["apellido"];
    const fechaNac = formulario.controls["fechaNac"];
    const curso = formulario.controls["curso"];
    const fechaPrueba = new Date();

    nombre.setValue('Aline');
    apellido.setValue('Pérez');
    fechaNac.setValue(fechaPrueba);
   curso.setValue("Hatha Yoga");

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();
    fixture.detectChanges();

    const agregarAlumnosRef = fixture.debugElement.query(By.css("#agregar-alumnos"));
    expect(agregarAlumnosRef).toBeTruthy();
  })
});
/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
