import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin: FormGroup;

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controles: any = {
      correo: new FormControl('jamilecadias@gmail.com', [Validators.required, Validators.email, Validators.pattern(regexCorreo)]),
      contrasena: new FormControl('jcd12345', [Validators.required, Validators.minLength(5)]),
      recordarCredenciales: new FormControl(true)
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login(){
    console.log(this.formularioLogin);
    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      console.log("Hubo un error en el formato del correo");
    }

    /* if(this.formularioLogin.controls['correo'].errors?.['required']){
      console.log("El correo es obligatorio");
    } */
  }
}
