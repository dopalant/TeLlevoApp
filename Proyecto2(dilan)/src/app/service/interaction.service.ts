import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController,
              private alertController: AlertController,) {}


  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Iniciar Viaje',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            this.handlerMessage = 'Viaje Cancelado';
          },
        },
        {
          text: 'OK',
          role: 'confirmar',
          handler: () => {
            this.handlerMessage = 'Viaje';
          },
        },
      ],
    });
  }

  //funcion para el boton de seleccionar viaje

}