import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarroPage } from './add-carro.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarroPageRoutingModule {}
