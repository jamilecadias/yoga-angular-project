import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-editar-alumno-dialog',
  templateUrl: './editar-alumno-dialog.component.html',
  styleUrls: ['./editar-alumno-dialog.component.css']
})
export class EditarAlumnoDialogComponent {
formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre === 'Pedro' ? 'Este es Pedro' : data.nombre),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      curso: new FormControl(data.curso)
    });
  }


cerrar(){
  this.dialogRef.close({modo: 'cerrar', ...this.data})
}
editar(){
  this.dialogRef.close({modo: 'editar', ...this.data})
}
}
