import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './prototypes-pages.component';
import { SearchPageComponent } from './search/search.component';
import { HomePageComponent } from './homepage/home.component';
import { SearchMobileComponent } from './search-mobile/search.component';
import { ReportPageComponent } from './report/report.component';
import { TablePageComponent } from './table/table.component';
import { DatePageComponent } from './date/date.component';
import { DynamicFormsPageComponent } from './dynamic-forms';
import { TabsDemoComponent } from './tabs/tabs-demo.component';

const PageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'search-mobile',
        component: SearchMobileComponent
      },
      {
        path: 'report',
        component: ReportPageComponent
      },
      {
        path: 'table',
        component: TablePageComponent
      },
      {
        path: 'date',
        component: DatePageComponent
      },
      {
        path: 'dynamic-form',
        component: DynamicFormsPageComponent
      },
      {
        path: 'tabs',
        component: TabsDemoComponent
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
