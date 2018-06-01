import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SamAsideContainerComponent
} from './aside-container.component';
import { SamAsideComponent } from './aside.component';
import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';

@NgModule({
  imports: [
    CommonModule,
    SamUIKitModule
  ],
  declarations: [
    SamAsideContainerComponent,
    SamAsideComponent
  ],
  exports: [
    SamAsideContainerComponent,
    SamAsideComponent
  ]
})
export class SamAsideModule {}
