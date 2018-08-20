import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';

import { SamLayoutDemoComponent } from './layout.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    FormlyModule
  ],
  declarations: [
    SamLayoutDemoComponent
  ],
  exports: [
    SamLayoutDemoComponent
  ]
})
export class LayoutModule {}
