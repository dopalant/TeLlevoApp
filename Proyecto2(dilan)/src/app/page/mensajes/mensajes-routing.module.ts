import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mensajesPage } from './mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: mensajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPageRoutingModule {}
