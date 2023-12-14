import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-pedirviaje',
  templateUrl: './pedirviaje.page.html',
  styleUrls: ['./pedirviaje.page.scss'],
})
export class PedirViajePage  {
  viajesDisponibles: any[] = [
    {
      origen: 'Bajos de Mena',
      destino: 'DuocUC',
      monto: 3000,
      fechaHora: '2023-11/ 14:30'
    },
    {
      origen: 'Plaza Puente Alto',
      destino: 'Duoc Uc',
      monto: 2000,
      fechaHora: '2023-11-10/ 15:00'
    },
    {
      origen: 'San Bernardo',
      destino: 'Duoc Uc',
      monto: 5000,
      fechaHora: '2023-11-10 /15:30'
    },
    // Agrega más viajes simulados según tus necesidades
  ];
  origen: string | undefined;
  monto: number | undefined;
  fechaHora: string | undefined;
  destino: string | undefined; 

  constructor( private router: Router,private alertController: AlertController,private navCtrl: NavController,private toastController: ToastController) { }
 
  async seleccionarViaje({ viaje }: { viaje: any; }) {const toast = await this.toastController.create({
    message: 'Viaje seleccionado correctamente',
    duration: 2000, // Duración en milisegundos del mensaje
  });
  toast.present();

    // Aquí puedes agregar lógica adicional, si es necesario
    this.router.navigate(['/access']);
  }
  ngOnInit() {

  }

  redirigirAAccess() {
    this.router.navigate(['/access']);
  } 
 

}