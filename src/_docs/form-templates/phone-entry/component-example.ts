import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-phone-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samPhoneEntry [phoneNumberTemplate]="'___-___-____'" [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></samPhoneEntry>
<samPhoneEntry [(model)]="phoneModel2" (emitter)="phoneModel2Change($event)"></samPhoneEntry>
</doc-template>
`
})
export class PhoneEntryExampleComponent extends BaseExampleComponent implements OnInit {
	phoneModel = "123-456-3366";
  phoneModel2 = "1+(123)456-3366";
  typedoc_target = "/phone-entry.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samPhoneEntry [phoneNumberTemplate]="'___-___-____'" [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></samPhoneEntry>
<samPhoneEntry [(model)]="phoneModel2" (emitter)="phoneModel2Change($event)"></samPhoneEntry>`;
	phoneModelChange(phoneNum){
    this.phoneModel = phoneNum;
  }
  phoneModel2Change(phoneNum){
    this.phoneModel2 = phoneNum;
  }
}