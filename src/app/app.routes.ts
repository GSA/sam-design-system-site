import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { path: 'docs', loadChildren: '../_docs/doc.module.dynamic#DocModule' },
  { 
    path: 'patterns', 
    loadChildren: "../patterns/patterns.module#ExamplesModule"
  },
  { 
    path: 'prototypes', 
    loadChildren: "../prototypes/prototypes.module#PrototypesModule"
  }
];