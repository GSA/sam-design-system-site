import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<div class="usa-grid-full">
  <div class="usa-width-one">
    <h3>Example with Selectable Categories and Subheading</h3>
    <sam-autocomplete
      [(ngModel)]="expl"
      [name]="'autocomplete test'"
      [id]="'unique_and_meaningful_id_value_1'"
      [labelText]="'LabelText goes here'"
      [hint]="'Show a hint here...'"
      [options]="[
        { key: 'MD', value: 'Maryland', category: 'Places' },
        { key: 'VA', value: 'Virginia', category: 'Places' },
        { key: 'DC', value: 'Washington, DC', category: 'Places' },
        { key: 'cc-carlos', value: 'Carlos', category: 'People', subhead: 'CSS Guru' },
        { key: 'cc-colin', value: 'Colin', category: 'People', subhead: 'UI Developer' },
        { key: 'cc-diego', value: 'Diego', category: 'People', subhead: 'UI Developer' }
      ]"
      [config]="{
        categoryProperty: 'category',
        categoryIsSelectable: true,
        keyValueConfig: {
          keyProperty: 'key',
          valueProperty: 'value',
          subheadProperty: 'subhead'
        }
      }"
      [allowAny]="false"
      [categories]="[{ key: 'People', value: 'People' }, { key: 'Places', value: 'Places' }]"
      [required]="true">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one">
    <h3>Example with Unselectable Categories and Subheadings</h3>
    <sam-autocomplete
      [(ngModel)]="expl2"
      [name]="'autocomplete test'"
      [id]="'unique_and_meaningful_id_value_1'"
      [labelText]="'LabelText goes here'"
      [hint]="'Show a hint here...'"
      [options]="[
        { key: 'MD', value: 'Maryland', category: 'Places' },
        { key: 'VA', value: 'Virginia', category: 'Places' },
        { key: 'DC', value: 'Washington, DC', category: 'Places' },
        { key: 'cc-carlos', value: 'Carlos', category: 'People', subhead: 'CSS Guru' },
        { key: 'cc-colin', value: 'Colin', category: 'People', subhead: 'UI Developer' },
        { key: 'cc-diego', value: 'Diego', category: 'People', subhead: 'UI Developer' }
      ]"
      [config]="{
        categoryProperty: 'category',
        categoryIsSelectable: false,
        keyValueConfig: {
          keyProperty: 'key',
          valueProperty: 'value',
          subheadProperty: 'subhead'
        }
      }"
      [allowAny]="false"
      [categories]="[{ key: 'People', value: 'People' }, { key: 'Places', value: 'Places' }]"
      [required]="true">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one">
    <h3>Example with Array of Strings</h3>
    <sam-autocomplete
      [(ngModel)]="value"
      name="inputname"
      [options]="options"
      labelText="simple autocomplete">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one">
    <h3>Example with Key Value Pairs</h3>
    <sam-autocomplete
      [(ngModel)]="value2"
      name="inputname"
      [config]="kv_config"
      [options]="kv_options"
      labelText="key/value autocomplete">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one">
    <h3>Example with Injected State Service Directive</h3>
    <sam-autocomplete
      [(ngModel)]="stateValue"
      name="inputname"
      state
      labelText="State">
    </sam-autocomplete>
  </div>
  <div class="usa-width-one">
    <h3>Example With Injected Country Service Directive</h3>
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
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content" [guidance]="guidance">
` + code_example + `
</doc-template>
`
})
export class AutocompleteExampleComponent extends BaseExampleComponent implements OnInit {
  expl;
  expl2;
  public value = 'apple';
  public value2 = { code: 'code05', value: 'pineapple' };
  public options = ['apple', 'orange', 'grape', 'banana', 'pineapple'];
  public kv_config = {
    keyValueConfig: {
      keyProperty: 'code',
      valueProperty: 'value'
    }
  };
  public kv_options = [{
    code: 'code01',
    value: 'apple'
  }, {
    code: 'code02',
    value: 'orange'
  }, {
    code: 'code03',
    value: 'grape'
  }, {
    code: 'code04',
    value: 'banana'
  }, {
    code: 'code05',
    value: 'pineapple'
  }];
  public stateValue = '';
  public countryValue = '';
  public typedoc_target = 'SamAutocompleteComponent';
  public typedoc_content = '';
  public example = code_example;

  public base = '_docs/form-controls/autocomplete/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

}
