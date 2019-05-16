/* tslint:disable */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { SamLayoutDemoComponent } from './layout';
import { SamLayoutNoSidebarDemoComponent } from './layout';
import { SamWorkspaceDemoComponent } from './workspace/workspace.component';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';

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
        path: 'workspace',
        component: SamWorkspaceDemoComponent
      },
      {
        path: 'workspace-dashboard',
        component: SamWorkspaceDashboardComponent
      },
    ],
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
