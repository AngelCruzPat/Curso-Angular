import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado=false;
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  entradas: object[];

  constructor(){

    this.entradas=[

      {titulo:"Python cada día más Presente"},
      {titulo:"Java Presente desde hace más de 20 años"},
      {titulo:"JavaScript cada día más Funcional"},
      {titulo:"Kotlin Potencia para tus Apps"},
      {titulo:"¿Dónde Quedó Pascal?"}
    ]

  }

  registrarUsuario(){

    this.registrado=true

    this.mensaje = "Usuario Registrado con Exito"
  }
}
