import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<sam-radio-button
  [(model)]="radioModel"
  [options]="radioConfig.options"
  [label]="radioConfig.label"
  [hint]="radioConfig.hint"
  [name]="radioConfig.name"
  [errorMessage]="radioConfig.errorMessage">
</sam-radio-button>`;

@Component({
	selector: 'doc-radio',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class RadioExampleComponent extends BaseExampleComponent implements OnInit {
	radioModel: any = 'ma';
  radioConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'radio-dc'},
      {value: 'ma', label: 'Maryland', name: 'radio-maryland'},
      {value: 'va', label: 'Virginia', name: 'radio-virginia'},
    ],
    name: 'radio-component',
    label: 'Select a region',
    errorMessage: '',
    hint: ''
  };
  typedoc_target = "SamRadioButtonComponent";
  typedoc_content = "";

  example = code_example;
  
  public base = '_docs/form-controls/radiobutton/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
