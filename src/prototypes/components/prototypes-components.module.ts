import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { ComponentsRoutingModule } from './prototypes-components.routes';

import { ComponentsComponent } from './prototypes-components.component';
import { PickerComponent } from './picker/component';

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
import { SamDynamicFormComponent, CustomFormlyDemoModule } from './dynamic-form';
import { FormlyModule } from '@ngx-formly/core';
import { DocFHServiceDemo } from './fh-service';

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
    ReactiveFormsModule,
    FormlyModule,
    CustomFormlyDemoModule
  ],
  declarations: [
    ComponentsComponent,
    PickerComponent,
    PickerLevel4Component,
    PickerLevel5Component,
    PickerLevel6Component,
    MainNavComponent,
    SamDynamicFormComponent,
    DocFHServiceDemo
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
    SamDynamicFormComponent,
    DocFHServiceDemo
  ]
})
export class PrototypesComponentsModule {}
