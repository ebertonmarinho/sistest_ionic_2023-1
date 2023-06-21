import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarrosPageRoutingModule } from './list-carros-routing.module';

import { ListCarrosPage } from './list-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarrosPageRoutingModule
  ],
  declarations: [ListCarrosPage]
})
export class ListCarrosPageModule {}
