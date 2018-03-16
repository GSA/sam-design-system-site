import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { PageAComponent } from './page-a/page.component';
import { PageADocComponent } from './page-a/page-doc.component';
import { PageASettingsComponent } from './page-a/page-settings.component';

import { PageBComponent } from './page-b/page.component';
import { PageBDocComponent } from './page-b/page-doc.component';


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
        path: 'a-doc',
        component: PageADocComponent,
        outlet: "master-modal"
      },
      {
        path: 'a-settings',
        component: PageASettingsComponent,
        outlet: "master-modal"
      },
      {
        path: 'b',
        component: PageBComponent
      },
      {
        path: 'b-doc',
        component: PageBDocComponent,
        outlet: "master-modal"
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