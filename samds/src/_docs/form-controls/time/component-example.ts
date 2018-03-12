import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-time name="example-time" [(ngModel)]="time"></sam-time>`;

@Component({
	selector: 'doc-time',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
<div style="clear:both;"></div>
</doc-template>
`
})
export class TimeExampleComponent extends BaseExampleComponent implements OnInit {
	time: string = "13:01";
  typedoc_target = "SamTimeComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}