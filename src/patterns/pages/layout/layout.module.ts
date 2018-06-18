import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';

import { SamLayoutComponentsModule } from './components';
import { SamLayoutDemoComponent } from '.';
import { DataStore } from '../../architecture';
import { layoutStore } from './update/layout-store';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    SamLayoutComponentsModule
  ],
  declarations: [
    SamLayoutDemoComponent
  ],
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    }
  ],
  exports: [
    SamLayoutDemoComponent
  ]
})
export class LayoutModule {}
