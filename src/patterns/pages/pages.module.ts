import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { LayoutModule } from './layout';
import { WorkspaceModule } from './workspace/workspace.module';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    LayoutModule,
    WorkspaceModule
  ],
  declarations: [
    PagesComponent,
    SamWorkspaceDashboardComponent,
  ]
})
export class PagesModule { }
