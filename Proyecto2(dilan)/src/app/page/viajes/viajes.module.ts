import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesPageRoutingModule } from './viajes-routing.module';
//import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { ViajesPage } from './viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesPageRoutingModule,
    
  ],
  declarations: [ViajesPage,
  ]
})
export class ViajesPageModule {}
