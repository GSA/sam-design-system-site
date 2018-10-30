import { NgModule } from '@angular/core';
import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CustomFormlyDemoComponent } from './custom-formly-demo';
import {FormlySAMUIModule} from '@gsa-sam/sam-ui-elements/src/formly';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SamUIKitModule,
    FormlyModule,
    FormlySAMUIModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'custom-autocomplete',
          component: CustomFormlyDemoComponent
        }
      ]
    })
  ],
  declarations: [
    CustomFormlyDemoComponent
  ],
  exports: [
    CustomFormlyDemoComponent
  ]
})
export class CustomFormlyDemoModule {}
