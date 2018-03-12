import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-phone-entry [phoneNumberTemplate]="'___-___-____'" [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></sam-phone-entry>
<sam-phone-entry [(model)]="phoneModel2" (emitter)="phoneModel2Change($event)"></sam-phone-entry>`;

@Component({
	selector: 'doc-phone-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class PhoneEntryExampleComponent extends BaseExampleComponent implements OnInit {
	phoneModel = "123-456-3366";
  phoneModel2 = "1+(123)456-3366";
  typedoc_target = "SamPhoneEntryComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
	phoneModelChange(phoneNum){
    this.phoneModel = phoneNum;
  }
  phoneModel2Change(phoneNum){
    this.phoneModel2 = phoneNum;
  }
}