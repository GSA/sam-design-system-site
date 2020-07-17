import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('../_docs/doc.module.dynamic').then((m) => m.DocModule),
  },
  {
    path: 'patterns',
    loadChildren: () =>
      import('../patterns/patterns.module').then((m) => m.ExamplesModule),
  },
];
