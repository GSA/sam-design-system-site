import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import {
  SamLayoutDemoComponent,
  SamLayoutComponentsModule
} from './layout';


// Data Entry
import { SinglePageEditorComponent } from './data-entry/single-page-editor/page.component';
import { MultiPageEditorComponent } from './data-entry/multi-page-editor/page.component';
import { ReviewPageComponent } from './data-entry/review-page/page.component';
import { VersionPageComponent } from './data-entry/version-page/page.component';

// Search
import { SearchAwardsPageComponent } from './search/search-awards/page.component';
import { SearchLearningPageComponent } from './search/search-learning/page.component';
import { DisplayListingPageComponent } from './search/display-listing/page.component';
import { DashboardListingPageComponent } from './search/dashboard-listing/page.component';
import { DisplayOpportunityPageComponent } from './search/display-opportunity/page.component';

// Workspace
import { WorkspaceLandingPageComponent } from './workspace/workspace-landing/page.component';
import { WorkspaceListingsPageComponent } from './workspace/workspace-listings/page.component';
import { WorkspaceUserDirectoryComponent } from './workspace/workspace-users/page.component';

// Databank
import { StandardReportPageComponent } from './databank/standard/page.component';
import { AdhocReportPageComponent } from './databank/adhoc/page.component';

// Data Services
import { DataFilesPageComponent } from './data-services/data-files/page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    SamLayoutComponentsModule
  ],
  declarations: [
    PagesComponent,
    PageAComponent,
    PageBComponent,
    SamLayoutDemoComponent,
    SinglePageEditorComponent,
    MultiPageEditorComponent,
    ReviewPageComponent,
    VersionPageComponent,
    SearchAwardsPageComponent,
    SearchLearningPageComponent,
    DisplayListingPageComponent,
    DashboardListingPageComponent,
    DisplayOpportunityPageComponent,
    WorkspaceLandingPageComponent,
    WorkspaceListingsPageComponent,
    WorkspaceUserDirectoryComponent,
    StandardReportPageComponent,
    AdhocReportPageComponent,
    DataFilesPageComponent,
  ]
})
export class PagesModule {}
