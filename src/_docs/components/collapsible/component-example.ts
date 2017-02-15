import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<sam-collapsible [label]="'Test Label'">
  <h1>I got projected in here</h1>
</sam-collapsible>`;

@Component({
	selector: 'doc-collapsible',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class CollapsibleExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamCollapsibleComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}