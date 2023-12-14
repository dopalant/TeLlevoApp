import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  usuarioConductor: any;
  viajes: any = [];

  constructor(private router:Router,
    private servAPI: ServicioDjangoService,
    private interactionService: InteractionService,
    private loader: loaderService) { }

  redirigirAInicio() {
    this.router.navigate(['/aces']);
  }  
  ngOnInit() {
    this.getViajes();
    this.getPerfilConductor();
  }

  getViajes(){
    const getToken = localStorage.getItem('token');
    if (getToken){
      this.usuarioConductor = JSON.parse(getToken);
      console.log(this.usuarioConductor);
    }
  }

  getPerfilConductor = async () =>{
    const getToken = localStorage.getItem('token');
    if (getToken){
      this.usuarioConductor = JSON.parse(getToken);
      console.log(this.usuarioConductor);
    }
  }
  
  inicio(){

    this.router.navigate(['/aces'])
  }
  historial(){

    this.router.navigate(['/historial'])
  }
  perfil(){

    this.router.navigate(['/perfilconductor'])
  }
  mensajes(){

    this.router.navigate(['/mensajes'])
  }

  redirigirAAccess() {
    this.router.navigate(['/aces']);
  }
}