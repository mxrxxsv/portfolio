import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Design1Page } from './design1.page';

const routes: Routes = [
  {
    path: '',
    component: Design1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Design1PageRoutingModule {}
