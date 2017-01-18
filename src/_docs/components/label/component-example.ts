import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-label',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<doc-accordion-dummy [sampleInput]="'456'"></doc-accordion-dummy>
</doc-template>
`
})
export class LabelExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "label.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `hmm`;
}