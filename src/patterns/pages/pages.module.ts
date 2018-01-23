import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamUIKitModule } from '../../../sam-ui-elements/src/ui-kit';
import { SiteComponentsModule } from '../../app/site-components/sitecomponents.module';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageADocumentationComponent } from './documentation/page-a.component';
import { PageBComponent } from './page-b/page.component';

// SAM UI Elements
import { MasterPageComponent } from '../sam-ui-elements/master-page.component'
import { PageComponent } from '../sam-ui-elements/page.component'
import { VideoEmbedComponent } from '../sam-ui-elements/video-embed.component'
import { SAMUIBoxComponent } from '../sam-ui-elements/box.component'
import { SAMHeadingComponent } from '../sam-ui-elements/sam-header.component'
import { SAMIconComponent } from '../sam-ui-elements/sam-icon.component'
import { SAMListComponent } from '../sam-ui-elements/sam-list.component'
import { SAMContainerComponent } from '../sam-ui-elements/sam-container.component'

@NgModule({
  declarations: [
    PagesComponent,
    PageAComponent,
    PageADocumentationComponent,
    PageBComponent,
    MasterPageComponent,
    PageComponent,
    VideoEmbedComponent,
    SAMUIBoxComponent,
    SAMHeadingComponent,
    SAMIconComponent,
    SAMListComponent,
    SAMContainerComponent
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

