import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements/src/ui-kit';

import { SamSearchDemoComponent } from './search.component';
import { SamLayoutComponentsModule, DataStore, layoutStore } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/patterns/layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    SamLayoutComponentsModule
  ],
  declarations: [
    SamSearchDemoComponent
  ],
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    }
  ],
  exports: [
    SamSearchDemoComponent
  ]
})
export class SearchDemoModule {}
