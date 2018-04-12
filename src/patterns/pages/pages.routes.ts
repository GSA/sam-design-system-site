import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component'
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';

const PageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'a',
        component: PageAComponent
      },
      {
        path: 'b',
        component: PageBComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(PageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule{}