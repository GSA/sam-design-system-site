import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { SamLayoutDemoComponent } from './layout';
import { SamSearchDemoComponent } from './search/search.component';

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
      },
      {
        path: 'layout',
        component: SamLayoutDemoComponent
      },
      {
        path: 'search',
        component: SamSearchDemoComponent
      },
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
export class PagesRoutingModule {}
