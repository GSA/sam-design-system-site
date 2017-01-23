import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samDate name="example-date" [(value)]='dateModel'></samDate>`;

@Component({
	selector: 'doc-date',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class DateExampleComponent extends BaseExampleComponent implements OnInit {
	dateModel: string = "2016-02-03";
  typedoc_target = "date.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}