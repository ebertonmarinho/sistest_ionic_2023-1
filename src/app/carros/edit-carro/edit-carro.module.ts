import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCarroPageRoutingModule } from './edit-carro-routing.module';

import { EditCarroPage } from './edit-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCarroPageRoutingModule
  ],
  declarations: [EditCarroPage]
})
export class EditCarroPageModule {}
