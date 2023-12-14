import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ModuloModule}from'src/app/modulo/modulo.module';
import { IonicModule } from '@ionic/angular';

import { PedirViajePageRoutingModule } from './pedirviaje-routing.module';

import { PedirViajePage } from './pedirviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirViajePageRoutingModule,ModuloModule,
  ],
  declarations: [PedirViajePage]
})
export class PedirViajePageModule {}




