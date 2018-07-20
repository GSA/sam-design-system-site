import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { ComponentsRoutingModule } from './prototypes-components.routes';

import { ComponentsComponent } from './prototypes-components.component';
import { PickerComponent } from './picker/component';
// import { PickerLevel2Component } from './picker/component';
// import { PickerLevel3Component } from './picker/component';
import { PickerLevel4Component } from './picker/component';
import { PickerLevel5Component } from './picker/component';
import { PickerLevel6Component } from './picker/component';
import { MainNavComponent } from './main-nav/component';
import { CdkTableModule } from '@angular/cdk';
import {
  MdPaginatorModule,
  MdTableModule,
  MdSortModule,
  MdTabsModule,
  MdChipsModule
} from '@angular/material';

import { SamExperimentalDataTableModule } from './table';
import { DatepickerProtoModule } from './date/picker/picker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    SamExperimentalDataTableModule,
    SamUIKitModule,
    MdTabsModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    CdkTableModule,
    MdChipsModule,
    DatepickerProtoModule,
  ],
  declarations: [
    ComponentsComponent,
    PickerComponent,
    // PickerLevel2Component,
    // PickerLevel3Component,
    PickerLevel4Component,
    PickerLevel5Component,
    PickerLevel6Component,
    MainNavComponent,
  ],
  exports: [
    MainNavComponent,
    MdTabsModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    CdkTableModule,
    SamExperimentalDataTableModule,
    DatepickerProtoModule,
  ]
})
export class PrototypesComponentsModule {}
