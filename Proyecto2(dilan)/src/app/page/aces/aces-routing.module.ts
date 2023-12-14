import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcesPage } from './aces.page';

const routes: Routes = [
  {
    path: '',
    component: AcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcesPageRoutingModule {}
