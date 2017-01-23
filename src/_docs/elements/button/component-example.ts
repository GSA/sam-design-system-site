import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'defaultBtn'" [buttonText]="'Default'" [buttonType]="btnType"></samButton>
  </div>
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'altBtn'" [buttonText]="'Alt'" [buttonType]="'alt'"></samButton>
  </div>
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'secondaryBtn'" [buttonText]="'Secondary'" [buttonType]="'secondary'"></samButton>
  </div>
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'grayBtn'" [buttonText]="'Gray'" [buttonType]="'gray'"></samButton>
  </div>
</div>
<div class="usa-width-one-whole">
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'outlineBtn'" [buttonText]="'Outline'" [buttonType]="'outline'"></samButton>
  </div>
  <div class="usa-width-one-fourth" style="background:#323a45;text-align:center;">
    <samButton [buttonId]="'invertedBtn'" [buttonText]="'Inverted'" [buttonType]="'inverted'"></samButton>
  </div>
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'disabledBtn'" [buttonText]="'Disabled'" [buttonType]="'disabled'"></samButton>
  </div>
  <div class="usa-width-one-fourth">
    <samButton [buttonId]="'bigBtn'" [buttonText]="'Big'" [buttonType]="'big'"></samButton>
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
  typedoc_target = "button.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}