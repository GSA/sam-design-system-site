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
<samPhoneEntry [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></samPhoneEntry>
</doc-template>
`
})
export class PhoneEntryExampleComponent extends BaseExampleComponent implements OnInit {
	phoneModel = "1+(123)456-3366";
  typedoc_target = "/phone-entry.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samPhoneEntry [(model)]="phoneModel" (emitter)="phoneModelChange($event)"></samPhoneEntry>`;
	phoneModelChange(phoneNum){
    this.phoneModel = phoneNum;
  }
}