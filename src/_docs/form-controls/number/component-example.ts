import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-number
  name="sample"
  [(ngModel)]="numValue">
</sam-number>`;

@Component({
  selector: 'doc-number',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class NumberExampleComponent extends BaseExampleComponent implements OnInit {
  numValue = 10;
  typedoc_target = 'SamNumberComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/number/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
