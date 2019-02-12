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
import { CoreLayoutComponent } from './core-layout/core-layout.component';


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
    path: 'core-layout',
    component: CoreLayoutComponent
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
