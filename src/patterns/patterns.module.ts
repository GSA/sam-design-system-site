import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';

import { PatternsRoutingModule } from './patterns.routes';

import { PatternsHomeComponent } from './home/patterns-home.component';


@NgModule({
  declarations: [
    PatternsHomeComponent
  ],
  imports: [
    CommonModule,
    PatternsRoutingModule,
    SamUIKitModule,
    SiteComponentsModule
  ],
  exports: [
  ],
})
export class ExamplesModule { }

