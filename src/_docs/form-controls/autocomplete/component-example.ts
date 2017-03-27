import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-third">
    <sam-autocomplete
      [(ngModel)]="value"
      name="inputname"
      [options]="options"
      labelText="sample label text">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one-third">
    <sam-autocomplete
      [(ngModel)]="stateValue"
      name="inputname"
      state
      labelText="State">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one-third">
    <sam-autocomplete
      [(ngModel)]="countryValue"
      name="inputname"
      country
      labelText="Country">
    </sam-autocomplete>
  </div>
</div>`;

@Component({
	selector: 'doc-checkbox',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class AutocompleteExampleComponent extends BaseExampleComponent implements OnInit {
	value = "apple";
  options = ["apple","orange","grape","banana","pineapple"];
  stateValue = "";
  countryValue = "";
	typedoc_target = "SamAutocompleteComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}