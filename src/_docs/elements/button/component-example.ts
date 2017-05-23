import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'defaultBtn'" [buttonText]="'Default'" [buttonType]="btnType"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'altBtn'" [buttonText]="'Alt'" [buttonType]="'alt'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'secondaryBtn'" [buttonText]="'Secondary'" [buttonType]="'secondary'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'grayBtn'" [buttonText]="'Gray'" [buttonType]="'gray'"></sam-button>
  </div>
</div>
<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'outlineBtn'" [buttonText]="'Outline'" [buttonType]="'outline'"></sam-button>
  </div>
  <div class="usa-width-one-fourth" style="background:#323a45;text-align:center;">
    <sam-button [buttonId]="'invertedBtn'" [buttonText]="'Inverted'" [buttonType]="'inverted'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'disabledBtn'" [buttonText]="'Disabled'" [buttonType]="'disabled'"></sam-button>
  </div>
  <div class="usa-width-one-fourth">
    <sam-button [buttonId]="'bigBtn'" [buttonText]="'Big'" [buttonType]="'big'"></sam-button>
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
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}