import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-time name="example-time" [(ngModel)]="time"></sam-time>`;

@Component({
	selector: 'doc-time',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
<div style="clear:both;"></div>
</doc-template>
`
})
export class TimeExampleComponent extends BaseExampleComponent implements OnInit {
	time: string = '13:01';
  typedoc_target = 'SamTimeComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/time/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
