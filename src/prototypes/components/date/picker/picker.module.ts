import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SamUIKitModule } from '@gsa-sam/sam-ui-elements/src/ui-kit';
import { DatepickerComponent } from './picker.component';

export * from './picker.component';

@NgModule({
  declarations: [ DatepickerComponent ],
  exports: [ DatepickerComponent ],
  imports: [ SamUIKitModule, CommonModule, FormsModule, ReactiveFormsModule ]
})
export class DatepickerProtoModule { }
