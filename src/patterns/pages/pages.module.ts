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

// SAM UI Elements
import { SamMasterPageComponent } from '../sam-ui-elements/sam-master-page.component';
import { SamPageComponent } from '../sam-ui-elements/sam-page.component';
import { SamYoutubeComponent } from '../sam-ui-elements/sam-youtube.component';
import { SamBoxComponent } from '../sam-ui-elements/sam-box.component';
import { SamHeadingComponent } from '../sam-ui-elements/sam-heading.component';
import { SamIconComponent } from '../sam-ui-elements/sam-icon.component';
import { SamListComponent } from '../sam-ui-elements/sam-list.component';
import { SamContainerComponent } from '../sam-ui-elements/sam-container.component';
import { SamSidebarComponent } from '../sam-ui-elements/sam-sidebar.component';

@NgModule({
  declarations: [
    PagesComponent,

    PageAComponent,
    PageADocComponent,
    PageASettingsComponent,
    
    PageBComponent,
    PageBDocComponent,

    SamMasterPageComponent,
    SamPageComponent,
    SamYoutubeComponent,
    SamBoxComponent,
    SamHeadingComponent,
    SamIconComponent,
    SamListComponent,
    SamContainerComponent,
    SamSidebarComponent
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

