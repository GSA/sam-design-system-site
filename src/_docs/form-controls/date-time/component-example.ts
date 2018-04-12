import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-date-time name="example-date" [(ngModel)]="dateTime"></sam-date-time>`;

@Component({
  selector: 'doc-datetime',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class DateTimeExampleComponent extends BaseExampleComponent implements OnInit {
  public dateTime: string = '2016-12-12T13:01';
  public typedoc_target = 'SamDateTimeComponent';
  public typedoc_content = '';

  public example = code_example;

  public base = '_docs/form-controls/date-time/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

}
