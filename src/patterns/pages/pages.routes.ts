import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { SamLayoutDemoComponent } from './layout';
import { SamLayoutNoSidebarDemoComponent } from './layout';
import { SamSearchDemoComponent } from './search/search.component';
import { SamWorkspaceDemoComponent } from './workspace/workspace.component';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PageDataViewComponent } from './page-data/page-data.component';
import { SearchResultsComponent } from './search-results/search-results.component';


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
        path: 'layout-nosidebar',
        component: SamLayoutNoSidebarDemoComponent
      },
      {
        path: 'search',
        component: SamSearchDemoComponent
      },
      {
        path: 'workspace',
        component: SamWorkspaceDemoComponent
      },
      {
        path: 'workspace-dashboard',
        component: SamWorkspaceDashboardComponent
      },
    ],
  },
  {
    path: 'page-wrapper',
    component: PageWrapperComponent
  },
  {
    path: 'page-data',
    component: PageDataViewComponent
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
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
