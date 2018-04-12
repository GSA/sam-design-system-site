import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatternsComponent } from './patterns.component';
import { PatternsHomeComponent } from './home/patterns-home.component';

import { HomeComponent } from './version-1/patterns-home.component';
import { StarterPageComponent } from './version-1/starter-page.component';
import { BasicPageCodeComponent } from './version-1/starter-page.component';
import { SidebarBreadcrumbsPageComponent  } from './version-1/sidebar-breadcrumbs.component';
import { SidebarBreadcrumbsPageCodeComponent  } from './version-1/sidebar-breadcrumbs.component';
import { TitleOptionsPageComponent  } from './version-1/title-options.component';
import { TitleOptionsPageCodeComponent  } from './version-1/title-options.component';


const patternsRoutes: Routes = [
  {
    path: 'page',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'v1',
    component: PatternsComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      { 
        path: 'basic-page-code', 
        outlet:'codesection',
        component: BasicPageCodeComponent
      },
      { 
        path: 'sidebar-breadcrumbs-code', 
        component: SidebarBreadcrumbsPageCodeComponent, 
        outlet:'codesection'
      },
      { 
        path: 'title-options-code', 
        component: TitleOptionsPageCodeComponent, 
        outlet:'codesection'
      },
      { 
        path: 'starter-page', 
        component: StarterPageComponent 
      },
      { 
        path: 'sidebar-breadcrumbs', 
        component: SidebarBreadcrumbsPageComponent 
      },
      { 
        path: 'title-options', 
        component: TitleOptionsPageComponent 
      }
    ]
  },
  {
    path: 'latest',
    component: PatternsComponent,
    children: [
      {
        path: 'home',
        component: PatternsHomeComponent
      }
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(patternsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatternsRoutingModule{}