import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';

import { PrototypesRoutingModule } from './prototypes.routes';
import { PrototypesHomeComponent } from './home/prototypes-home.component';

@NgModule({
  declarations: [
    PrototypesHomeComponent
  ],
  imports: [
    CommonModule,
    PrototypesRoutingModule,
    SamUIKitModule,
    SiteComponentsModule
  ],
  exports: [
  ],
})
export class PrototypesModule { }

