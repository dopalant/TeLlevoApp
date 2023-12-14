import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearViajePage } from './crearviaje.page';

const routes: Routes = [
  {
    path: '',
    component: CrearViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearviajePageRoutingModule {}
