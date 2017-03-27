import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

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
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}