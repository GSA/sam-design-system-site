import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';
//var code_example = ``;

@Component({
	selector: 'doc-sticky',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
Scroll down and see Sidenav
</doc-template>
<div style="height:800px;"></div>
`
})
export class StickyExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "SamStickyComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = `<div class="sticky-target usa-grid">
  <div class="usa-width-one-fourth">
    <nav sam-sticky [container]="sticky-target">
      ...
    </nav>
    &nbsp;
  </div>
  <div class="usa-width-three-fourths">
      ...
  </div>
</div>`;
}