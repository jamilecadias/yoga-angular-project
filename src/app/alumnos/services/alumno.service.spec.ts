import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnoService } from './alumno.service';
import { of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

describe('AlumnoService', () => {
  let service: AlumnoService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnoService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio retorna un arreglo de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Alumno[] = [
      {
       "nombre": "Alberto",
       "apellido": "Paz",
       "email": "alberto@gmail.com",
       "fechaNac": fechaPrueba,
       "curso": "Bikham Yoga",
       "id": "1"
      },
      {
       "nombre": "Barbara",
       "apellido": "Campos",
       "email": "barbara@gmail.com",
       "fechaNac": fechaPrueba,
       "curso": "Yoga para embarazadas",
       "id": "3"
      }
     ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
       expect(alumnos).toEqual(mockDatos);
       done();
     });
  })
});

