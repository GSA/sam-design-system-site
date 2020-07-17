import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { LayoutModule } from './layout';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { SamEntityDisplayComponent } from './entity-display/entity-display.component';
import { SamPatternPageComponentsComponent } from './page-components/page-components.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    LayoutModule,
    FontAwesomeModule,
  ],
  declarations: [
    PagesComponent,
    SamWorkspaceDashboardComponent,
    SamEntityDisplayComponent,
    SamPatternPageComponentsComponent,
    TableComponent,
  ],
})
export class PagesModule {}
