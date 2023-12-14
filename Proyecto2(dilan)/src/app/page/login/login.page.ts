import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';
import { loaderService } from 'src/app/service/loader.service';
import { InteractionService } from 'src/app/service/interaction.service';
import { UsuarioAPI } from 'src/app/interface/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  datoslog:any={
    correo:'',
    contrasenia:''
  }
  constructor(
    private router: Router,
    private authService: AuthService,
    private servAPI:ServicioDjangoService,
    private loader:loaderService,
    private interaction: InteractionService) { }

  ngOnInit() {

  }

  login(){
    this.servAPI.getUsuario().subscribe((usuarios:UsuarioAPI[]) => {
      try {
        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === this.datoslog.correo && usuario.contrasenia === this.datoslog.contrasenia);
        if (usuarioEncontrado) {
          localStorage.setItem('token',JSON.stringify(usuarioEncontrado));
          setTimeout(()=> {
            this.interaction.presentToast('Se a iniciado sesion correctamente')
          },1000);
          this.router.navigate(['/access']);
        } else {
          this.interaction.presentToast('Credenciales incorrectas');
        }
      } catch (error) {
        console.log(error);
      }
    })
  }
}


// Componente de inicio de sesión
