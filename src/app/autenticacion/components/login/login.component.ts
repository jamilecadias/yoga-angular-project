import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl(false)
    });
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin
    }
    this.loginService.login(usuario);
    this.router.navigate(['inicio']);
  }
}

 /* import { Component } from '@angular/core';
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

   
*/