/* tslint:disable */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { SamLayoutDemoComponent } from './layout';
import { SamLayoutNoSidebarDemoComponent } from './layout';
import { SamEntityDisplayComponent } from './entity-display/entity-display.component';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { SamPatternBannerComponent } from './banner/banner.component';

const PageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'layout',
        component: SamLayoutDemoComponent
      },
      {
        path: 'layout-nosidebar',
        component: SamLayoutNoSidebarDemoComponent
      },
      {
        path: 'entity-display',
        component: SamEntityDisplayComponent
      },
      {
        path: 'workspace-dashboard',
        component: SamWorkspaceDashboardComponent
      },
    ],
  },
  {
    path: 'banner',
    component: SamPatternBannerComponent
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
export class PagesRoutingModule { }
