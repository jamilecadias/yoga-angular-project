import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formularioRegistro: FormGroup;

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controles: any = {
      correo: new FormControl('jamilecadias@gmail.com', [Validators.required, Validators.email, Validators.pattern(regexCorreo)]),
      contrasena: new FormControl('jcd12345', [Validators.required, Validators.minLength(5)]),
      recordarCredenciales: new FormControl(true)
    }
    this.formularioRegistro = new FormGroup(controles);
  }

  login(){
    console.log(this.formularioRegistro);
    if(this.formularioRegistro.controls['correo'].errors?.['pattern']){
      console.log("Hubo un error en el formato del correo");
    }
  }
}
