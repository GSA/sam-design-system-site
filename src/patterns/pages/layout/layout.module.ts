import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements/src/ui-kit';

import { SamLayoutDemoComponent } from './layout.component';

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
  exports: [
    SamLayoutDemoComponent
  ]
})
export class LayoutModule {}
