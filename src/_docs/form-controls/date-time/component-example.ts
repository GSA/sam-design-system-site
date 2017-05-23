import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<sam-date-time name="example-date" [(value)]="dateTime"></sam-date-time>`;

@Component({
	selector: 'doc-datetime',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class DateTimeExampleComponent extends BaseExampleComponent implements OnInit {
	dateTime: string = "2016-12-12T13:01";
  typedoc_target = "SamDateTimeComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}