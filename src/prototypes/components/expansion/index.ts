
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  CompatibilityModule, 
  UNIQUE_SELECTION_DISPATCHER_PROVIDER
} from '@angular/material';

import {
  MdExpansionPanelDescription,
  MdExpansionPanelTitle,
  MdExpansionPanelActionRow
} from '@angular/material';

import { SamExpansionPanelHeader } from './expansion-panel-header';
import { SamExpansionPanel } from './expansion-panel';
import { SamAccordion } from './accordion';

@NgModule({
  imports: [CompatibilityModule, CommonModule],
  exports: [
    SamAccordion,
    SamExpansionPanel,
    MdExpansionPanelActionRow,
    SamExpansionPanelHeader,
    MdExpansionPanelTitle,
    MdExpansionPanelDescription
  ],
  declarations: [
    SamAccordion,
    SamExpansionPanel,
    MdExpansionPanelActionRow,
    SamExpansionPanelHeader,
    MdExpansionPanelTitle,
    MdExpansionPanelDescription
  ],
  providers: [UNIQUE_SELECTION_DISPATCHER_PROVIDER]
})
export class SamExpansionModule {}