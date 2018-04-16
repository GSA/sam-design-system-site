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
import { PrototypeAccordionComponent } from './accordion/accordion.component'
import { PrototypePanelComponent } from './accordion/panel.component';
import { PrototypeTabsComponent } from './tab/tabs.component';
import { PrototypeTabComponent } from './tab/tab.component';

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
    MainNavComponent,
    PrototypeAccordionComponent,
    PrototypePanelComponent,
    PrototypeTabsComponent,
    PrototypeTabComponent
  ],
  exports: [
    MainNavComponent,
    PrototypeAccordionComponent,
    PrototypePanelComponent,
    PrototypeTabsComponent,
    PrototypeTabComponent
  ]
})
export class PrototypesComponentsModule {}