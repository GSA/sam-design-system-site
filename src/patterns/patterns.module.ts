import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';

import { PatternsRoutingModule } from './patterns.routes';

// Version 1
import { HomeComponent  } from './version-1/patterns-home.component';
import { StarterPageComponent } from './version-1/starter-page.component';
import { BasicPageCodeComponent } from './version-1/starter-page.component';
import { SidebarBreadcrumbsPageComponent  } from './version-1/sidebar-breadcrumbs.component';
import { SidebarBreadcrumbsPageCodeComponent  } from './version-1/sidebar-breadcrumbs.component';
import { TitleOptionsPageComponent  } from './version-1/title-options.component';
import { TitleOptionsPageCodeComponent  } from './version-1/title-options.component';


import { PatternsComponent } from './patterns.component';
import { PatternsHomeComponent } from './home/patterns-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    StarterPageComponent,
    BasicPageCodeComponent,
    SidebarBreadcrumbsPageComponent,
    SidebarBreadcrumbsPageCodeComponent,
    TitleOptionsPageComponent,
    TitleOptionsPageCodeComponent,
    PatternsComponent,
    PatternsHomeComponent
  ],
  imports: [
    CommonModule,
    PatternsRoutingModule,
    SamUIKitModule,
    SiteComponentsModule
  ],
  exports: [],
})
export class ExamplesModule { }

