import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<sam-sidenav [model]="config"></sam-sidenav>`;

@Component({
	selector: 'doc-sidenav',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content" [design]="design" [guidance]="guidance">
See sidenav on the left
</doc-template>
`
})
export class SidenavExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamSidenavComponent";
  typedoc_content = "";
  example = code_example;

  public base = '_docs/components/sidenav/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
