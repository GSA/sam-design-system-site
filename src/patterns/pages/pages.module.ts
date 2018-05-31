import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { SamLayoutDemoComponent, SamActionBarComponent,
  SamAsideComponent, SamMainComponent, SamLayoutComponent,
  SamToolbarComponent, SamDatabankPaginationComponent } from './layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule
  ],
  declarations: [
    PagesComponent,
    PageAComponent,
    PageBComponent,
    SamLayoutDemoComponent,
    SamLayoutComponent,
    SamActionBarComponent,
    SamAsideComponent,
    SamMainComponent,
    SamToolbarComponent,
    SamDatabankPaginationComponent
  ]
})
export class PagesModule {}
