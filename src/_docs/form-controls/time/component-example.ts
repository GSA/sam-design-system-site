import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samTime name="example-time" [(value)]="time"></samTime>`;

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
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}