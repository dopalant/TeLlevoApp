import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class loaderService {
  constructor(public loadingController: LoadingController) { }

  simpleLoader() {
    this.loadingController.create({
      message: 'cargando...',
      duration: 2000
    }).then((response: any) => {
      response.present();
    });
  }
  registerLoader() {
    this.loadingController.create({
      message: 'Su cuenta esta siendo registrada',
      duration: 2000
    }).then((response: any) => {
      response.present();
    });
  }
  loginLoader() {
    this.loadingController.create({
      message: 'Su cuenta esta verificada',
      duration: 2000
    }).then((response: any) => {
      response.present();
    });
  }
}