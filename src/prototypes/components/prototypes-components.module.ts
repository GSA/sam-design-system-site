import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { ComponentsRoutingModule } from './prototypes-components.routes';

import { ComponentsComponent } from './prototypes-components.component';
import { PickerComponent } from './picker/component';
import { PickerLevel2Component } from './picker/component';
import { PickerLevel3Component } from './picker/component';
import { PickerLevel4Component } from './picker/component';
import { PickerLevel5Component } from './picker/component';
import { PickerLevel6Component } from './picker/component';
import { MainNavComponent } from './main-nav/component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    SamUIKitModule
  ],
  declarations: [
    ComponentsComponent,
    PickerComponent,
    PickerLevel2Component,
    PickerLevel3Component,
    PickerLevel4Component,
    PickerLevel5Component,
    PickerLevel6Component,
    MainNavComponent
  ],
  exports: [
    MainNavComponent
  ]
})
export class PrototypesComponentsModule {}