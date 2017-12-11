import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-date-time name="example-date" [(ngModel)]="dateTime"></sam-date-time>`;

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
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}