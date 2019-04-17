import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { LayoutModule } from './layout';
import { SearchDemoModule } from './search/search.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { SamWorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PageDataViewComponent } from './page-data/page-data.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { HeaderFooterAngualarComponent } from './header-footer-components/header-footer-components.component';
import { SdsFooterModule } from '@gsa-sam/sam-ui-elements/src/ui-kit/layout/footer/footer.module';
import { SdsHeaderModule } from '@gsa-sam/sam-ui-elements/src/ui-kit/layout/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    LayoutModule,
    SearchDemoModule,
    WorkspaceModule,
    SdsFooterModule,
    SdsHeaderModule
  ],
  declarations: [
    PagesComponent,
    PageAComponent,
    PageBComponent,
    SamWorkspaceDashboardComponent,
    PageWrapperComponent,
    PageDataViewComponent,
    SearchResultsComponent,
    HeaderFooterComponent,
    HeaderFooterAngualarComponent
  ]
})
export class PagesModule { }
