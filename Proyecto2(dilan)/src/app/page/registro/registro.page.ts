import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioAPI } from 'src/app/interface/usuario';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:any={
    nombrecompleto:'',
    rut:'',
    telefono:'',
    correo:'',
    contrasenia:''
  }

  constructor(private router: Router,
              private servAPI:ServicioDjangoService,
              private loaderService:loaderService,
              private interaction: InteractionService) { }

  ngOnInit() {
  }
  registrar(){
    let usuario:UsuarioAPI={
      nombrecompleto: this.usuario.nombrecompleto,
      rut: this.usuario.rut,
      telefono: this.usuario.telefono,
      correo: this.usuario.correo,
      contrasenia: this.usuario.contrasenia
    }
    this.servAPI.crearUsuario(usuario).subscribe(()=> {
      if (usuario){
        this.loaderService.registerLoader();
        setTimeout(()=> {
          this.interaction.presentToast('Su cuenta se creo correctamente')
        },1000);
        this.router.navigate(['/login']);
        console.log(usuario);
      } else{
        this.interaction.presentToast('Error al registrarse');
      }
    })
  }
}
