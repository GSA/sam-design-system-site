import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './prototypes-components.component';

import { PickerComponent } from './picker/component';
import { PickerLevel2Component } from './picker/component';
import { PickerLevel3Component } from './picker/component';
import { PickerLevel4Component } from './picker/component';
import { PickerLevel5Component } from './picker/component';
import { PickerLevel6Component } from './picker/component';

import { MainNavComponent } from './main-nav/component';

const PageRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'picker',
        component: PickerComponent
      },
      {
        path: 'picker-2',
        component: PickerLevel2Component
      },
      {
        path: 'picker-3',
        component: PickerLevel3Component
      },
      {
        path: 'picker-4',
        component: PickerLevel4Component
      },
      {
        path: 'picker-5',
        component: PickerLevel5Component
      },
      {
        path: 'picker-6',
        component: PickerLevel6Component
      },
      {
        path: 'main-nav',
        component: MainNavComponent
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
export class ComponentsRoutingModule {}
