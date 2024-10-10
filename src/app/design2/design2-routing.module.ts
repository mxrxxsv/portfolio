import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Design2Page } from './design2.page';

const routes: Routes = [
  {
    path: '',
    component: Design2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Design2PageRoutingModule {}
