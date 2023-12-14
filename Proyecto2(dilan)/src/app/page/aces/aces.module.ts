import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcesPageRoutingModule } from './aces-routing.module';

import { AcesPage } from './aces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcesPageRoutingModule
  ],
  declarations: [AcesPage]
})
export class AcesPageModule {}
