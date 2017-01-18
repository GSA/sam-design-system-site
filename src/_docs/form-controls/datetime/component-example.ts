import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-datetime',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samDateTime name="example-date" [(value)]="dateTime"></samDateTime>
</doc-template>
`
})
export class DateTimeExampleComponent extends BaseExampleComponent implements OnInit {
	dateTime: string = "2016-12-12T13:01";
  typedoc_target = "date-time.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samDateTime name="example-date" [(value)]="dateTime"></samDateTime>`;
}