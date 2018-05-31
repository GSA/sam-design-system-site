import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageAComponent } from './page-a/page.component';
import { PageBComponent } from './page-b/page.component';
import { SamLayoutDemoComponent } from './layout';

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

// Learning Center


const PageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'a',
        component: PageAComponent
      },
      {
        path: 'b',
        component: PageBComponent
      },
      {
        path: 'layout',
        component: SamLayoutDemoComponent
      },
      {
        path: 'data-entry/single-page-editor',
        component: SinglePageEditorComponent
      },
      {
        path: 'data-entry/multi-page-editor',
        component: MultiPageEditorComponent
      },
      {
        path: 'data-entry/review-page',
        component: ReviewPageComponent
      },
      {
        path: 'data-entry/version-page',
        component: VersionPageComponent
      },
      {
        path: 'search/search-awards',
        component: SearchAwardsPageComponent
      },
      {
        path: 'search/search-learning',
        component: SearchLearningPageComponent
      },
      {
        path: 'search/display-listing',
        component: DisplayListingPageComponent
      },
      {
        path: 'search/dashboard-listing',
        component: DashboardListingPageComponent
      },
      {
        path: 'search/display-opportunity',
        component: DisplayOpportunityPageComponent
      },
      {
        path: 'workspace/workspace-landing',
        component: WorkspaceLandingPageComponent
      },
      {
        path: 'workspace/workspace-listings',
        component: WorkspaceListingsPageComponent
      },
      {
        path: 'workspace/workspace-users',
        component: WorkspaceUserDirectoryComponent
      },
      {
        path: 'data-services/data-files',
        component: DataFilesPageComponent
      },
      {
        path: 'databank/standard',
        component: StandardReportPageComponent
      },
      {
        path: 'databank/adhoc',
        component: AdhocReportPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(PageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}
