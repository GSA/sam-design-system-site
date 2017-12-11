import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SamUIKitModule } from '../../sam-ui-elements/src/ui-kit';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';

import { Routing } from './examples.routes';

import { StarterPageComponent } from './starter-page.component';
import { BasicPageCodeComponent } from './starter-page.component';

import { SidebarBreadcrumbsPageComponent  } from './sidebar-breadcrumbs.component';
import { SidebarBreadcrumbsPageCodeComponent  } from './sidebar-breadcrumbs.component';

import { TitleOptionsPageComponent  } from './title-options.component';
import { TitleOptionsPageCodeComponent  } from './title-options.component';

@NgModule({
  declarations: [
    StarterPageComponent,
    BasicPageCodeComponent,
    SidebarBreadcrumbsPageComponent,
    SidebarBreadcrumbsPageCodeComponent,
    TitleOptionsPageComponent,
    TitleOptionsPageCodeComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    SamUIKitModule,
    SiteComponentsModule
  ],
  exports: [
  ],
})
export class ExamplesModule { }

