import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarroPageRoutingModule } from './add-carro-routing.module';

import { AddCarroPage } from './add-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarroPageRoutingModule
  ],
  declarations: [AddCarroPage]
})
export class AddCarroPageModule {}
