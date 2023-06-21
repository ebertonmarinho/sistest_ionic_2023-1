import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCarroPage } from './edit-carro.page';

const routes: Routes = [
  {
    path: '',
    component: EditCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCarroPageRoutingModule {}
