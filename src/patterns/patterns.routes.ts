import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatternsHomeComponent } from './home/patterns-home.component';

const patternsRoutes: Routes = [
  {
    path: 'home',
    component: PatternsHomeComponent,
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(patternsRoutes)],
  exports: [RouterModule],
})
export class PatternsRoutingModule {}
