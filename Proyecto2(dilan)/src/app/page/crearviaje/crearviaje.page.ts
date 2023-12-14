import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Viajes } from 'src/app/interface/viajes';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  Viajes:any={
    idviaje:'',
    inicio:'',
    termino:'',
    precio:'',
    fecha:'',
  }

  constructor(private router: Router,
    private servAPI:ServicioDjangoService,
    private loaderService:loaderService,
    private interaction: InteractionService) { }

    ngOnInit() {
    }
    registra(){
      let Viajes:Viajes={
        inicio: this.Viajes.inicio,
        termino: this.Viajes.termino,
        precio: this.Viajes.precio,
        fecha: this.Viajes.fecha,
        idviaje: this.Viajes.idviaje,
        longitud: '',
        latitud: ''
      }
      this.servAPI.CrearViajes(Viajes).subscribe(()=> {
        if (Viajes){
          this.loaderService.registerLoader();
          setTimeout(()=> {
            this.interaction.presentToast('El Viajes se a creado correctamente')
          },1000);
          this.router.navigate(['/aces']);
          console.log(Viajes);
        } else{
          this.interaction.presentToast('Error al Crear el viaje');
          
        }
      })
    }
  }

