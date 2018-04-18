import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-date name="example-date" [(ngModel)]='dateModel'></sam-date>`;

@Component({
  selector: 'doc-date',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class DateExampleComponent extends BaseExampleComponent implements OnInit {
  public dateModel: string = '2016-02-03';
  public typedoc_target = 'SamDateComponent';
  public typedoc_content = '';

  public example = code_example;

  public base = '_docs/form-controls/date/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
