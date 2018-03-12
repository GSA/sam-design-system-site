import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-third">
    <sam-toggle-switch [isSwitchOn]="true"></sam-toggle-switch>
  </div>
</div>`;

@Component({
	selector: 'doc-toggle-switch',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class ToggleSwitchExampleComponent extends BaseExampleComponent implements OnInit {

	typedoc_target = "SamToggleSwitchComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}