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
      labelText="simple autocomplete">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one-third">
    <sam-autocomplete
      [(ngModel)]="value2"
      name="inputname"
      [config]="kv_config"
      [options]="kv_options"
      labelText="key/value autocomplete">
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
	selector: 'doc-autocomplete',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class AutocompleteExampleComponent extends BaseExampleComponent implements OnInit {
	value = "apple";
  value2 = { "code": "code05", "value": "pineapple" };
  options = ["apple","orange","grape","banana","pineapple"];
  kv_config = {
    keyValueConfig: {
      keyProperty: 'code',
      valueProperty: 'value'
    }
  };
  kv_options = [{
    code:"code01",
    value:"apple"
  },{
    code:"code02",
    value:"orange"
  },{
    code:"code03",
    value:"grape"
  },{
    code:"code04",
    value:"banana"
  },{
    code:"code05",
    value:"pineapple"
  }];
  stateValue = "";
  countryValue = "";
	typedoc_target = "SamAutocompleteComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}