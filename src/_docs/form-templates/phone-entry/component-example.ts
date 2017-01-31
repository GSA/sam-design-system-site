import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samPhoneEntry [phoneNumberTemplate]="'___-___-____'" [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></samPhoneEntry>
<samPhoneEntry [(model)]="phoneModel2" (emitter)="phoneModel2Change($event)"></samPhoneEntry>`;

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
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
	phoneModelChange(phoneNum){
    this.phoneModel = phoneNum;
  }
  phoneModel2Change(phoneNum){
    this.phoneModel2 = phoneNum;
  }
}