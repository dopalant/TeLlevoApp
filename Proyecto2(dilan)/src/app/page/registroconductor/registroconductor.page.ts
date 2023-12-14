import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorAPI } from 'src/app/interface/conductor';
import { InteractionService } from 'src/app/service/interaction.service';
import { loaderService } from 'src/app/service/loader.service';
import { ServicioDjangoService } from 'src/app/service/servicioDjango.service';

@Component({
  selector: 'app-registroconductor',
  templateUrl: './registroconductor.page.html',
  styleUrls: ['./registroconductor.page.scss'],
})
export class RegistroconductorPage implements OnInit {
  Conductor:any={
    nombre:'',
    apellido:'',
    rut:'',
    telefono:'',
    puntuacion:'',
    correo:'',
    contrasenia:'',
    vehiculo:'',
    patente:''
  }

  constructor(private router: Router,
    private servAPI:ServicioDjangoService,
    private loaderService:loaderService,
    private interaction: InteractionService) { }

    ngOnInit() {
    }
    registrar(){
      let Conductor:ConductorAPI={
        nombre: this.Conductor.nombre,
        apellido: this.Conductor.apellido,
        rut: this.Conductor.rut,
        puntuacion: this.Conductor.puntuacion,
        telefono: this.Conductor.telefono,
        correo: this.Conductor.correo,
        vehiculo: this.Conductor.vehiculo,
        patente: this.Conductor.patente,
        contrasenia: this.Conductor.contrasenia,
        disponible: this.Conductor.disponible
      }
      this.servAPI.crearConductor(Conductor).subscribe(()=> {
        if (Conductor){
          this.loaderService.registerLoader();
          setTimeout(()=> {
            this.interaction.presentToast('Su cuenta se creo correctamente')
          },1000);
          this.router.navigate(['/loginconductor']);
          console.log(Conductor);
        } else{
          this.interaction.presentToast('Error al registrarse');
        }
      })
    }
  }
