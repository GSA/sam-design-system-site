import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements/src/ui-kit';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { LayoutModule } from './layout';
import { SearchDemoModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    LayoutModule,
    SearchDemoModule
  ],
  declarations: [
    PagesComponent,
    PageAComponent,
    PageBComponent
  ]
})
export class PagesModule {}
