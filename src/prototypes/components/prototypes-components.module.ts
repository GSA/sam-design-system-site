import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { ComponentsRoutingModule } from './prototypes-components.routes';

import { ComponentsComponent } from './prototypes-components.component';
import { PickerComponent } from './picker/component';
import { PickerLevel2Component } from './picker/component';
import { PickerLevel3Component } from './picker/component';
import { PickerLevel4Component } from './picker/component';
import { PickerLevel5Component } from './picker/component';
import { PickerLevel6Component } from './picker/component';
import { MainNavComponent } from './main-nav/component';
import { SamExpansionModule } from './expansion';
import { CdkTableModule } from '@angular/cdk';
import {
  MdPaginatorModule,
  MdTableModule,
  MdSidenavModule,
  MdSortModule,
  MdTabsModule,
  MdChipsModule
} from '@angular/material';

import { SamDataTableModule } from './table';
import { DatepickerProtoModule } from './date/picker/picker.module';
import { SamDatePickerComponent } from './date/date.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,

    SamDataTableModule,
    SamUIKitModule,
    MdTabsModule,
    SamExpansionModule,
    MdSidenavModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    CdkTableModule,
    MdChipsModule,
    DatepickerProtoModule
  ],
  declarations: [
    ComponentsComponent,
    PickerComponent,
    PickerLevel2Component,
    PickerLevel3Component,
    PickerLevel4Component,
    PickerLevel5Component,
    PickerLevel6Component,
    MainNavComponent,
    SamDatePickerComponent,
  ],
  exports: [
    MainNavComponent,
    MdTabsModule,
    SamExpansionModule,
    MdSidenavModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    CdkTableModule,
    SamDataTableModule,
    SamDatePickerComponent,
    DatepickerProtoModule
  ]
})
export class PrototypesComponentsModule {}
