import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';
import { loaderService } from 'src/app/service/loader.service';
import { InteractionService } from 'src/app/service/interaction.service';
import { ConductorAPI } from 'src/app/interface/conductor';

@Component({
  selector: 'app-loginconductor',
  templateUrl: './loginconductor.page.html',
  styleUrls: ['./loginconductor.page.scss'],
})

export class LoginconductorPage implements OnInit {
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
  
    logincond(){
      this.servAPI.getConductor().subscribe((conductor:ConductorAPI[]) => {
        try {
          const conductorEncontrado = conductor.find(conductor => conductor.correo === this.datoslog.correo && conductor.contrasenia === this.datoslog.contrasenia);
          if (conductorEncontrado) {
            localStorage.setItem('token',JSON.stringify(conductorEncontrado));
            setTimeout(()=> {
              this.interaction.presentToast('Se a iniciado sesion correctamente')
            },1000);
            this.router.navigate(['/aces']);
          } else {
            this.interaction.presentToast('Credenciales incorrectas');
          }
        } catch (error) {
          console.log(error);
        }
      })
    }
  }
