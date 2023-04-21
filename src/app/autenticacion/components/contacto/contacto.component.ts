import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {
  formularioContacto!: FormGroup;
  suscripcion!: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,


  ){}

  ngOnInit(): void {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      infoEmail: new FormControl(),
      telefono: new FormControl(),
      infoWhats: new FormControl(),
      menasaje: new FormControl(),

    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  contacto(){
   /*  let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin */
    }
   /*  this.suscripcion = this.loginService.login(usuario).subscribe((sesion: Sesion) => {
      this.authStore.dispatch(cargarSesion({ sesion: sesion }));
      this.router.navigate(['inicio']);
    }); */
    onSubmit() {

    }
  }


