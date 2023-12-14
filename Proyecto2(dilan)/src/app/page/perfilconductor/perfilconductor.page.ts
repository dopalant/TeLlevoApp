import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';
@Component({
  selector: 'app-perfilconductor',
  templateUrl: './perfilconductor.page.html',
  styleUrls: ['./perfilconductor.page.scss'],
})
export class PerfilconductorPage implements OnInit {
  usuarioConductor: any = [];

  constructor(private router:Router,
              private servAPI: ServicioDjangoService,
              private interactionService: InteractionService,
              private loader: loaderService) { }

  ngOnInit() {
    this.getPerfilConductor();
  }

  getPerfilConductor = async () =>{
    const getToken = localStorage.getItem('token');
    if (getToken){
      this.usuarioConductor = JSON.parse(getToken);
      console.log(this.usuarioConductor);
    }
  }
  inicio(){

    this.router.navigate(['/inicio'])
  }
  historial(){

    this.router.navigate(['/historial'])
  }
  mensajes(){

    this.router.navigate(['/mensajes'])
  }
}
