import { Alumno } from "src/app/models/alumno";

export const alumnos = {
    obtenerAlumnos:()=>{
        return[
          {id:'2', nombre: 'Mariana', apellido: 'Martínez', fechaNac: new Date, curso: 'Hatha Yoga'},
          {id:'3', nombre: 'Pedro', apellido: 'Pérez', fechaNac: new Date, curso: 'Vinyasa Yoga'},
          {id:'4', nombre: 'Catarina', apellido: 'Rodríguez', fechaNac: new Date, curso: 'Yoga para embarazadas'},
          {id:'5', nombre: 'Lucas', apellido: 'Fernández', fechaNac: new Date, curso: 'Ashtanga Vinyasa Yoga'},
        ];
    },

    agregarAlumno: (alumno: Alumno) => {
        console.log('Agregando alumno desde alumno.data.ts');
      }
}
