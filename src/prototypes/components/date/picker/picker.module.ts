import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { DatepickerComponent } from './picker.component';

import { SamInputMaskComponent } from './input-masking.component';

export * from './picker.component';

@NgModule({
  declarations: [ DatepickerComponent, SamInputMaskComponent ],
  exports: [ DatepickerComponent, SamInputMaskComponent ],
  imports: [ SamUIKitModule, CommonModule, FormsModule, ReactiveFormsModule ]
})
export class DatepickerProtoModule { }
