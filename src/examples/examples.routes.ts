import { Routes, RouterModule } from '@angular/router';

import { StarterPageComponent } from './starter-page.component';
import { BasicPageCodeComponent } from './starter-page.component';

import { SidebarBreadcrumbsPageComponent  } from './sidebar-breadcrumbs.component';
import { SidebarBreadcrumbsPageCodeComponent  } from './sidebar-breadcrumbs.component';

import { TitleOptionsPageComponent  } from './title-options.component';
import { TitleOptionsPageCodeComponent  } from './title-options.component';

export const ROUTES: Routes = [
  { path: 'starter-page', component: StarterPageComponent },
  { path: 'basic-page-code', component: BasicPageCodeComponent, outlet:'codesection'},

  { path: 'sidebar-breadcrumbs', component: SidebarBreadcrumbsPageComponent },
  { path: 'sidebar-breadcrumbs-code', component: SidebarBreadcrumbsPageCodeComponent, outlet:'codesection'},

  { path: 'title-options', component: TitleOptionsPageComponent },
  { path: 'title-options-code', component: TitleOptionsPageCodeComponent, outlet:'codesection'},
];

export const Routing = RouterModule.forChild(ROUTES);