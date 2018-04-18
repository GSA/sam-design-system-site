import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-select
  [(model)]="selectModel"
  [name]="selectConfig.name"
  [options]="selectConfig.options"
  [label]="selectConfig.label">
</sam-select>`;

@Component({
	selector: 'doc-select',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class SelectExampleComponent extends BaseExampleComponent implements OnInit {
	selectModel = '';
  selectConfig = {
    options: [
      {value: '', label: 'Default option', name: 'empty', disabled: true},
      {value: 'dc', label: 'Washington DC', name: 'dc'},
      {value: 'ma', label: 'Maryland', name: 'maryland'},
      {value: 'va', label: 'Virginia', name: 'virginia'},
    ],
    disabled: false,
    label: 'Region',
    name: 'region'
  };
  typedoc_target = 'SamSelectComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/select/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
