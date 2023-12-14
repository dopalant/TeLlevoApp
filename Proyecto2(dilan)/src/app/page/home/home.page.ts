import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl:NavController,
    private router: Router
  ) {}

  mover(){
    this.navCtrl.navigateForward("access")
  }

  login(){

    this.router.navigate(['/login'])
  }
  logincond(){

    this.router.navigate(['/loginconductor'])
  }

}
