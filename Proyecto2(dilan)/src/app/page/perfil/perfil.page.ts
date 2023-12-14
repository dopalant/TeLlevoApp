import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuarioPasajero: any = [];

  constructor(private router:Router,
              private servAPI: ServicioDjangoService,
              private interactionService: InteractionService,
              private loader: loaderService) { }

  ngOnInit() {
    this.getPerfilUsuario();
  }

  getPerfilUsuario = async () =>{
    const getToken = localStorage.getItem('token');
    if (getToken){
      this.usuarioPasajero = JSON.parse(getToken);
      console.log(this.usuarioPasajero);
    }
  }
  wallet(){

    this.router.navigate(['/wallet'])
  }
  inicio(){

    this.router.navigate(['/access'])
  }
  viajes(){

    this.router.navigate(['/viajes'])
  }
  mensajes(){

    this.router.navigate(['/mensajes'])
  }
}
