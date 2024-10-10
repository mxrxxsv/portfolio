import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Design2PageRoutingModule } from './design2-routing.module';

import { Design2Page } from './design2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Design2PageRoutingModule
  ],
  declarations: [Design2Page]
})
export class Design2PageModule {}
