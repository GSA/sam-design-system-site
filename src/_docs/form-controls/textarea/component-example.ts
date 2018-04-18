import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-text-area
  [(ngModel)]="textareaModel"
  [name]="textareaConfig.name"
  [label]="textareaConfig.label"
  [hint]="textareaConfig.hint"
  [errorMessage]="textareaConfig.errorMessage"
  [disabled]="textareaConfig.disabled">
</sam-text-area>`;

@Component({
	selector: 'doc-textarea',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class TextareaExampleComponent extends BaseExampleComponent implements OnInit {
	textareaModel= 'Some Text';
  textareaConfig = {
    label: 'Enter zipcode',
    hint: 'Zipcode can be short or long version',
    errorMessage: 'Uh-oh, something went wrong',
    name: 'aria-friendly-name',
    disabled: false,
  };
  typedoc_target = 'SamTextareaComponent';
  typedoc_content = '';

	example = `<samTextArea
  [(ngModel)]="textareaModel"
  [name]="textareaConfig.name"
  [label]="textareaConfig.label"
  [hint]="textareaConfig.hint"
  [errorMessage]="textareaConfig.errorMessage"
  [disabled]="textareaConfig.disabled">
</samTextArea>`;

  public base = '_docs/form-controls/textarea/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
