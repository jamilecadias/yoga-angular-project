import { Curso } from "./curso";

export interface Alumno{
    id: string,
    nombre: string;
    email: string;
    fechaNac: Date;
    curso: Curso;
    alumnoActivo: boolean;
}

