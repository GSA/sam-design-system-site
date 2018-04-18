import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-checkbox
  [(ngModel)]="checkboxModel"
  [name]="checkboxConfig.name"
  [options]="checkboxConfig.options"
  [label]="checkboxConfig.label"
  [hint]="checkboxConfig.hint"
  [errorMessage]="checkboxConfig.errorMessage"
  [hasSelectAll]="checkboxConfig.hasSelectAll">
</sam-checkbox>
<br/>
<sam-checkbox
[(ngModel)]="checkboxModel2"
[name]="disabledCheckboxConfig.name"
[options]="disabledCheckboxConfig.options"
[label]="disabledCheckboxConfig.label"
[hint]="disabledCheckboxConfig.hint"
[errorMessage]="disabledCheckboxConfig.errorMessage"
[hasSelectAll]="disabledCheckboxConfig.hasSelectAll"
[disabled]="true">
</sam-checkbox>`;

@Component({
	selector: 'doc-checkbox',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class CheckboxExampleComponent extends BaseExampleComponent implements OnInit {
  checkboxModel: any = ['ma'];
  checkboxModel2: any = ['ma'];
  checkboxConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'checkbox-dc'},
      {value: 'ma', label: 'Maryland', name: 'checkbox-maryland'},
      {value: 'va', label: 'Virginia', name: 'checkbox-virginia'},
    ],
    name: 'my-sr-name',
    label: 'Select a region (normal)',
    hasSelectAll: false,
    errorMessage: null,
    hint: ''
  };
  disabledCheckboxConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'checkbox-dc'},
      {value: 'ma', label: 'Maryland', name: 'checkbox-maryland'},
      {value: 'va', label: 'Virginia', name: 'checkbox-virginia'},
    ],
    name: 'my-sr-name',
    label: 'Select a region (disabled)',
    hasSelectAll: false,
    errorMessage: null,
    hint: ''
  };
	typedoc_target = 'SamCheckboxComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/checkbox/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
