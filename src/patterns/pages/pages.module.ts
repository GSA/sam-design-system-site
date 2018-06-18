import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { LayoutModule } from './layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    LayoutModule
  ],
  declarations: [
    PagesComponent,
    PageAComponent,
    PageBComponent
  ]
})
export class PagesModule {}
