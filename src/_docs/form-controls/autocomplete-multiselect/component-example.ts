import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import {
  AutocompleteService
} from 'sam-ui-elements/src/ui-kit/form-controls/autocomplete/\
autocomplete.service';
import { ACTestService } from './autocomplete.service';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example1 = 'export class ACTestService implements AutocompleteService {';

const code_example2 = `
  private values: any = [
    { key: 'Random', value: 'Random'},
    { key: 'Just some data', value: 'Just some data'},
    ...
  ];
`;

const code_example3 = `
  \tprivate start: number = 0;
  private end: number = 2;
  private lastSearch: string;

  public setFetchMethod(_: any) {}
`;

const code_example4 = `
  \tpublic resetPagination() {
    this.start = 0;
    this.end = 2;
  }
`;

const code_example5 = `
  \tpublic fetch(val: string, pageEnd: boolean, serviceOptions: any) {
    if (val !== this.lastSearch) {
      this.resetPagination();
    }
`;

const code_example6 = `
    \tif (pageEnd && val === this.lastSearch) {
      this.start = this.end;
      this.end = this.end + 2;
      if (this.end > this.values.length) {
        return Observable.of([]);
      }
    }

    this.lastSearch = val;
`;

const code_example7 = `
    \treturn Observable.of(this.filter(val).slice(this.start, this.end));
  }

  private filter (val) {
    return this.values.filter(
      (value) => {
        if (value.key.toLowerCase().includes(val.toLowerCase())
          || value.value.toLowerCase().includes(val.toLowerCase())) {
          return value;
        }
      }
    );
  }
}
`;

const finalCode = `
export class ACTestService implements AutocompleteService {
  private values: any = [
    { key: 'Random', value: 'Random'},
    { key: 'Just some data', value: 'Just some data'},
    ...
  ];

  private start: number = 0;
  private end: number = 2;
  private lastSearch: string;

  public setFetchMethod(_: any) {}

  public resetPagination() {
    this.start = 0;
    this.end = 2;
  }
  public fetch(val: string, pageEnd: boolean, serviceOptions: any) {
    if (val !== this.lastSearch) {
      this.resetPagination();
    }
    if (pageEnd && val === this.lastSearch) {
      this.start = this.end;
      this.end = this.end + 2;
      if (this.end > this.values.length) {
        return Observable.of([]);
      }
    }

    this.lastSearch = val;
    return Observable.of(this.filter(val).slice(this.start, this.end));
  }

  private filter (val) {
    return this.values.filter(
      (value) => {
        if (value.key.toLowerCase().includes(val.toLowerCase())
          || value.value.toLowerCase().includes(val.toLowerCase())) {
          return value;
        }
      }
    );
  }
}
`;

const paginatedComponent = `
<sam-autocomplete-multiselect
[keyValueConfig]="{
  keyProperty: 'key',
  valueProperty: 'value',
  subheadProperty: 'subhead'
}"
[serviceOptions]="{}"
[label]="'Label goes here...'"
[hint]="'Hint goes here...'"
[name]="'name for input'"
[categories]="[
  { key: 'People', value: 'People' },
  { key: 'Places', value: 'Places' }
]"
[categoryIsSelectable]="true"
[allowAny]="false"
[defaultSearchString]="''">
</sam-autocomplete-multiselect>`;

const code_example = `<div class="usa-grid-full">
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
  <div class="usa-width-one">
    <h3>Component with Pagination</h3>
    <sam-autocomplete-multiselect
      [keyValueConfig]="{
        keyProperty: 'key',
        valueProperty: 'value',
        subheadProperty: 'subhead'
      }"
      [serviceOptions]="{}"
      [label]="'Label goes here...'"
      [hint]="'Hint goes here...'"
      [name]="'name for input'"
      [categories]="[
        { key: 'People', value: 'People' },
        { key: 'Places', value: 'Places' }
      ]"
      [categoryIsSelectable]="true"
      [allowAny]="false"
      [defaultSearchString]="''">
    </sam-autocomplete-multiselect>
  </div>
</div>`;

@Component({
  selector: 'doc-autocomplete-multiselect',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content" [guidance]="guidance">
` + code_example + `
  <br>
  <article>
    <header>
      <h2>Working with Paginated Services</h2>
    </header>
    <p>The autocomplete multiselect supports working with services that use pagination
    to implement an infinite scroll effect. The component itself stores the values
    passed to it and removes duplicates. However, the developer using the component
    must track the pagination by search string herself.

    The following class demonstrates how to setup pagination with the component.
    As with any autocomplete service, we start by implementing the
    AutocompleteService interface.</p>
    <code-example language="javascript" [code]="code"></code-example>
    <p>The values in this component come from a private member property, but this could
    just as easily come from a service call. In that case, the developer would need
     to use Angular's @Injectable() decorator.</p>
    <code-example language="javascript" [code]="code2"></code-example>
    <p>In this simple example, we use the property names start and end to track
    pagination; however, typically pagination properties are called offset and
    limit.

    We initialize the start property to 0 to start at the beginning of the
    index. The end property indicates the last index in the array that should
    return from the results.

    Finally, lastSearch is used to track the current filter string. When the
    string changes, the pagination should reset since the result list should be
    different.</p>
    <code-example language="javascript" [code]="code3"></code-example>
    <p>The resetPagination method is used to reset the pagination variables back to
    their initial state when the searchString changes.</p>
    <code-example language="javascript" [code]="code4"></code-example>
    <p>The fetch method from the AutocompleteService is where most of the magic
    happens. First, we check if the latest search string, val, is the same as the
    lastSearch. If not, we reset pagination.</p>
    <code-example language="javascript" [code]="code5"></code-example>
    <p>Next, if the pageEnd parameter is true and val hasn't changed
    since the last search, increment the indices that are used for pagination. In
    this case, I also added a check that if the index is out of scope, return an
    empty array.</p>
    <code-example language="javascript" [code]="code6"></code-example>
    <p>Finally, we call the filter method to return the sliced array with the
    correct indices.</p>
    <code-example language="javascript" [code]="code7"></code-example>
    <p>In an ideal world, most of this tracking will be done by an API call.
    However, this example serves to demonstrate the concerns that developers need
    to account for when implementing pagination on this component.</p>
    <section>
    <h3>Complete Service Code</h3>
    <code-example language="javascript" [code]="code8"></code-example>
    </section>
  </article>
</doc-template>
`
})
export class AutocompleteMultiselectExampleComponent extends BaseExampleComponent implements OnInit {
	value = 'apple';
  value2 = { 'code': 'code05', 'value': 'pineapple' };
  multiselectOptions = [
    { key: 'Apple', value: 'Apple' },
    { key: 'Grape', value: 'Grape' },
    { key: 'Banana', value: 'Banana' },
    { key: 'Orange', value: 'Orange' },
    { key: 'Acorn', value: 'Acorn' },
  ];

  multiselectConfig = {
    keyProperty: 'key',
    valueProperty: 'value'
  };
	typedoc_target = 'SamAutocompleteMultiselectComponent';
  typedoc_content = '';
  example = code_example;

  code = code_example1;
  code2 = code_example2;
  code3 = code_example3;
  code4 = code_example4;
  code5 = code_example5;
  code6 = code_example6;
  code7 = code_example7;
  code8 = finalCode;

  public base = '_docs/form-controls/autocomplete-multiselect/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

}
