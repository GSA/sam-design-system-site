import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-sticky',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
</doc-template>
`
})
export class StickyExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "accordion.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = ``;
}