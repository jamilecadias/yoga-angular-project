import { Alumno } from "src/app/models/alumno";

export const alumnos = {
    obtenerAlumnos:()=>{
        return[
          {nombre: 'Mariana', apellido: 'Martínez', curso: 'Hatha Yoga'},
          {nombre: 'Pedro', apellido: 'Pérez', curso: 'Vinyasa Yoga'},
          {nombre: 'Catarina', apellido: 'Rodríguez', curso: 'Yoga para embarazadas'},
          {nombre: 'Lucas', apellido: 'Fernández', curso: 'Ashtanga Vinyasa Yoga'},

        ];
    },

    agregarAlumno: (alumno: Alumno) => {
        console.log('Agregando alumno desde alumno.data.ts');
      }
}
