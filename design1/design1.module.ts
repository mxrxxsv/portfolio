import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Design1PageRoutingModule } from './design1-routing.module';

import { Design1Page } from './design1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Design1PageRoutingModule
  ],
  declarations: [Design1Page]
})
export class Design1PageModule {}
