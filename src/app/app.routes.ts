import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExampleComponent } from './examples.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home'} },
  { path: 'examples', component: ExampleComponent, data: { state: 'examples'} }
];