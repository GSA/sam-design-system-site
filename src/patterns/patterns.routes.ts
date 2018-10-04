import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatternsHomeComponent } from './home/patterns-home.component';

const patternsRoutes: Routes = [
  {
    path: 'home',
    component: PatternsHomeComponent
  },
  {
    path: 'page',
    loadChildren: './pages/pages.module#PagesModule'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(patternsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatternsRoutingModule {}
