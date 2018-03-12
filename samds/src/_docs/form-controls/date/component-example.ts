import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-date name="example-date" [(ngModel)]='dateModel'></sam-date>`;

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
  typedoc_target = "SamDateComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}