import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginconductorPageRoutingModule } from './loginconductor-routing.module';
import{ModuloModule} from 'src/app/modulo/modulo.module';
import { LoginconductorPage } from './loginconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginconductorPageRoutingModule,
    ModuloModule,
  ],
  declarations: [LoginconductorPage]
})
export class LoginconductorPageModule {}
