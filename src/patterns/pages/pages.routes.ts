/* tslint:disable */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { SamLayoutDemoComponent } from './layout';
import { SamLayoutNoSidebarDemoComponent } from './layout';
import { SamEntityDisplayComponent } from './entity-display/entity-display.component';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { SamPatternPageComponentsComponent } from './page-components/page-components.component';

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
    path: 'page-components',
    component: SamPatternPageComponentsComponent
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
