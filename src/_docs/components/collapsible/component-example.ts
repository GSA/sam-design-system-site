import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

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
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}