import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-sidenav [model]="config"></sam-sidenav>`;

@Component({
	selector: 'doc-sidenav',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content" [design]="design" [guidance]="guidance">
See sidenav on the left
</doc-template>
`
})
export class SidenavExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamSidenavComponent";
  typedoc_content = "";
  example = code_example;

  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);

  design_raw = require('raw-loader!./design.md');
  design = markdownLoader(this.design_raw);

  guidance_raw = require('raw-loader!./guidance.md');
  guidance = markdownLoader(this.guidance_raw);
}