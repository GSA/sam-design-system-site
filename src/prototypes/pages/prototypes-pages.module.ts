import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { PagesRoutingModule } from './prototypes-pages.routes';
import { PrototypesComponentsModule  } from '../components/prototypes-components.module';

import { PagesComponent } from './prototypes-pages.component';
import { SearchPageComponent } from './search/search.component';
import { HomePageComponent } from './homepage/home.component';
import { SearchMobileComponent } from './search-mobile/search.component';
import { ReportPageComponent } from './report/report.component';
import { CdkTableModule } from '@angular/cdk';
import { TablePageComponent } from './table/table.component';
import { SamDateRangeFilterComponent } from './search/sam-front-end-components/date-range';
import { SamWDFilters } from './search/sam-front-end-components/wage-determination';
import { SearchUtil } from './search/sam-front-end-components/wage-determination/search.util';
import { SamSortFilter } from './search/sam-front-end-components/sort-by/sort.filter';
import { SamSortComponent } from './search/sam-front-end-components/sort-by/sam-sort';
import {
  SamSearchResultAsideComponent,
  SamSearchResultBodyComponent,
  SamSearchResultComponent,
  SamSearchResultHeaderComponent,
  SamSearchResultMainComponent,
  SamSearchResultHeaderMetaRight
} from './search/sam-front-end-components/search-result';
import { DatePageComponent } from './date/date.component';
import { SortArrayOfObjects } from './search/sam-front-end-components/wage-determination/sort-array-object.pipe';
import { DynamicFormsPageComponent } from './dynamic-forms';
import { FormlyModule } from '@ngx-formly/core';
import { IconDemoComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SamUIKitModule,
    FormlyModule,
    CdkTableModule,
    PrototypesComponentsModule,
  ],
  declarations: [
    PagesComponent,
    SearchPageComponent,
    HomePageComponent,
    SearchMobileComponent,
    ReportPageComponent,
    TablePageComponent,
    SamDateRangeFilterComponent,
    SamWDFilters,
    SamSearchResultAsideComponent,
    SamSearchResultBodyComponent,
    SamSearchResultComponent,
    SamSearchResultHeaderComponent,
    SamSearchResultMainComponent,
    SamSearchResultHeaderMetaRight,
    SamSortFilter,
    SamSortComponent,
    DatePageComponent,
    SortArrayOfObjects,
    DynamicFormsPageComponent,
    IconDemoComponent
  ],
  providers: [
    SearchUtil,
  ]
})
export class PrototypesPagesModule {}
