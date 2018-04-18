import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-text
  [(ngModel)]="textModel"
  [name]="textConfig.name"
  [label]="textConfig.label"
  [hint]="textConfig.hint"
  [errorMessage]="textConfig.errorMessage"
  [disabled]="textConfig.disabled">
</sam-text>`;

@Component({
	selector: 'doc-text',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class TextExampleComponent extends BaseExampleComponent implements OnInit {
	textModel = 'Some Text';
  textConfig = {
    label: 'Enter zipcode',
    hint: 'Zipcode can be short or long version',
    errorMessage: 'Uh-oh, something went wrong',
    name: 'aria-friendly-name',
    disabled: false,
  };
  typedoc_target = 'SamTextComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/text/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
