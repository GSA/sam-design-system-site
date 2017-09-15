import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'primaryBtn'" [buttonText]="'primary'" [buttonType]="'primary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'secondaryBtn'" [buttonText]="'secondary'" [buttonType]="'secondary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'tertiaryBtn'" [buttonText]="'tertiary'" [buttonType]="'tertiary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'negativeBtn'" [buttonText]="'negative'" [buttonType]="'negative'"></sam-button>
  </div>
</div>
<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <sam-button buttonDisabled="true" [buttonId]="'primaryBtn'" [buttonText]="'primary'" [buttonType]="'primary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button buttonDisabled="true" [buttonId]="'secondaryBtn'" [buttonText]="'secondary'" [buttonType]="'secondary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button buttonDisabled="true" [buttonId]="'tertiaryBtn'" [buttonText]="'tertiary'" [buttonType]="'tertiary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button buttonDisabled="true" [buttonId]="'negativeBtn'" [buttonText]="'negative'" [buttonType]="'negative'"></sam-button>
  </div>
</div>`;

@Component({
	selector: 'doc-button',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class ButtonExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamButtonComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
	example = code_example;
}