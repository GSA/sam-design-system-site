import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SamAsideModule } from './aside';
import { SamActionBarComponent } from './actionbar.component';
import { SamLayoutComponent } from './layout.component';
import { SamMainComponent } from './main.component';
import { SamDatabankPaginationComponent } from './pagination.component';
import { SamToolbarComponent } from './toolbar.component';
import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    SamAsideModule
  ],
  declarations: [
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamDatabankPaginationComponent,
    SamToolbarComponent
  ],
  exports: [
    SamAsideModule,
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamDatabankPaginationComponent,
    SamToolbarComponent
  ]
})
export class SamLayoutComponentsModule {}
