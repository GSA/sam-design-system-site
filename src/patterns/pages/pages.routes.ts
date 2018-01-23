import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageADocumentationComponent } from './documentation/page-a.component';
import { PageBComponent } from './page-b/page.component';

const pagesRoutes: Routes = [
  {
    path: 'page',
    component: PagesComponent,
    children: [
      {
        path: 'a',
        component: PageAComponent
      },
      {
        path: 'page-a',
        component: PageADocumentationComponent,
        outlet: "settings"
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
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule  
  ]
})
export class PagesRoutingModule{}