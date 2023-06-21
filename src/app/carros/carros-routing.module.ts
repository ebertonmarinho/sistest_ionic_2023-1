import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosPage } from './carros.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosPage
  },
  {
    path: 'add-carro',
    loadChildren: () => import('./add-carro/add-carro.module').then( m => m.AddCarroPageModule)
  },
  {
    path: 'edit-carro',
    loadChildren: () => import('./edit-carro/edit-carro.module').then( m => m.EditCarroPageModule)
  },
  {
    path: 'list-carros',
    loadChildren: () => import('./list-carros/list-carros.module').then( m => m.ListCarrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosPageRoutingModule {}
