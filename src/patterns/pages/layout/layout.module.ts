import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';

import { SamLayoutDemoComponent } from './layout.component';
import { SamLayoutNoSidebarDemoComponent } from './layout-nosidebar.component';
import { FormlyModule } from '@ngx-formly/core';
import { SamFilterModule } from '@gsa-sam/sam-ui-elements';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    FormlyModule,
    SamFilterModule
  ],
  declarations: [
    SamLayoutDemoComponent,
    SamLayoutNoSidebarDemoComponent,
  ],
  exports: [
    SamLayoutDemoComponent,
    SamLayoutNoSidebarDemoComponent,
  ]
})
export class LayoutModule {}
