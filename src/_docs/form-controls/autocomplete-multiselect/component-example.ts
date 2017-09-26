import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one">
    <h3>Simple Example</h3>
    <sam-autocomplete-multiselect
      label="Team Members" required="true"
      [keyValueConfig]="multiselectConfig" 
      [options]="multiselectOptions">
    </sam-autocomplete-multiselect>
  </div>
  <div class="usa-width-one">
    <h3>One With Everything</h3>
    <sam-autocomplete-multiselect
      [options]="[
        { key: 'MD', value: 'Maryland', category: 'Places' },
        { key: 'VA', value: 'Virginia', category: 'Places' },
        { key: 'DC', value: 'Washington, DC', category: 'Places' },
        { key: 'cc-carlos', value: 'Carlos', category: 'People', subhead: 'CSS Guru' },
        { key: 'cc-colin', value: 'Colin', category: 'People', subhead: 'UI Developer' },
        { key: 'cc-diego', value: 'Diego', category: 'People', subhead: 'UI Developer' }
      ]"
      [keyValueConfig]="{
        keyProperty: 'key',
        valueProperty: 'value',
        subheadProperty: 'subhead'
      }"
      [serviceOptions]="{}"
      [required]="true"
      [label]="'Label goes here...'"
      [hint]="'Hint goes here...'"
      [name]="'name for input'"
      [categories]="[{ key: 'People', value: 'People' }, { key: 'Places', value: 'Places' }]"
      [categoryIsSelectable]="true"
      [allowAny]="false"
      [defaultSearchString]="''"
      [errorMessage]="'Error message goes here'">
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