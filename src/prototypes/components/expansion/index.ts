
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  CompatibilityModule,
  UNIQUE_SELECTION_DISPATCHER_PROVIDER
} from '@angular/material';

import {
  MdExpansionModule
} from '@angular/material';

import { SamExpansionPanelHeaderComponent } from './expansion-panel-header';
import { SamExpansionPanelComponent } from './expansion-panel';
import { SamAccordionDirective } from './accordion';

@NgModule({
  imports: [
    CompatibilityModule,
    CommonModule,
    MdExpansionModule
  ],
  exports: [
    SamAccordionDirective,
    SamExpansionPanelComponent,
    SamExpansionPanelHeaderComponent
  ],
  declarations: [
    SamAccordionDirective,
    SamExpansionPanelComponent,
    SamExpansionPanelHeaderComponent
  ],
  providers: [UNIQUE_SELECTION_DISPATCHER_PROVIDER]
})
export class SamExpansionModule {}
