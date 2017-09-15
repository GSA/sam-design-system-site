import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-third">
    <sam-autocomplete-multiselect
      label="Team Members" required="true"
      [keyValueConfig]="multiselectConfig" 
      [options]="multiselectOptions">
    </sam-autocomplete-multiselect>
  </div>
</div>`;

@Component({
	selector: 'doc-autocomplete-multiselect',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class AutocompleteMultiselectExampleComponent extends BaseExampleComponent implements OnInit {
	value = "apple";
  value2 = { "code": "code05", "value": "pineapple" };
  multiselectOptions = [
     { key: 'Apple', value: 'Apple' },
     { key: 'Grape', value: 'Grape' },
     { key: 'Banana', value: 'Banana' },
     { key: 'Orange', value: 'Orange' },
     { key: 'Acorn', value: 'Acorn' },
   ]

   multiselectConfig = {
     keyProperty: 'key',
     valueProperty: 'value'
   }
	typedoc_target = "SamAutocompleteMultiselectComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
	example = code_example;
}