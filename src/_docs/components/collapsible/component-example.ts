import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-collapsible [label]="'Test Label'">
  <h1>I got projected in here</h1>
</sam-collapsible>`;

@Component({
	selector: 'doc-collapsible',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class CollapsibleExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamCollapsibleComponent';
  typedoc_content = '';

  example = code_example;


  public base = '_docs/components/collapsible/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
