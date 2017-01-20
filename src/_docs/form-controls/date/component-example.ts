import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-date',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samDate name="example-date" [(value)]='dateModel'></samDate>
</doc-template>
`
})
export class DateExampleComponent extends BaseExampleComponent implements OnInit {
	dateModel: string = "2016-02-03";
  typedoc_target = "date.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samDate name="example-date" [(value)]='dateModel'></samDate>`;
}