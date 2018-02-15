import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamUIKitModule } from '../../../sam-ui-elements/src/ui-kit';
import { SiteComponentsModule } from '../../app/site-components/sitecomponents.module';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageADocComponent } from './page-a/page-doc.component';
import { PageASettingsComponent } from './page-a/page-settings.component';
import { PageBComponent } from './page-b/page.component';
import { PageBDocComponent } from './page-b/page-doc.component';
import { SearchPageComponent } from './search/search.component';
import { SearchPageHomeComponent } from './search/home.component';


@NgModule({
  declarations: [
    PagesComponent,
    PageAComponent,
    PageADocComponent,
    PageASettingsComponent,
    PageBComponent,
    PageBDocComponent,
    SearchPageComponent,
    SearchPageHomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SamUIKitModule,
    SiteComponentsModule
  ],
  exports: [
  ],
})
export class PagesModule { }

