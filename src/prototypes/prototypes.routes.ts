import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypesHomeComponent } from './home/prototypes-home.component';

const prototypesRoutes: Routes = [
  {
    path: '',
    component: PrototypesHomeComponent
  },
  {
    path: 'page',
    loadChildren: './pages/prototypes-pages.module#PrototypesPagesModule'
  },
  {
    path: 'component',
    loadChildren: './components/prototypes-components.module#PrototypesComponentsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(prototypesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrototypesRoutingModule {}
