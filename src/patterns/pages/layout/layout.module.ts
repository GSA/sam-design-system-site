import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';

import { SamLayoutDemoComponent } from './layout.component';
import { DataStore, layoutStore } from 'sam-ui-elements/src/ui-kit/experimental/patterns/layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule
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
