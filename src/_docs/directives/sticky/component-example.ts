import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

//var code_example = ``;

@Component({
	selector: 'doc-sticky',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
Scroll down and see Sidenav
</doc-template>
<div style="height:800px;"></div>
`
})
export class StickyExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = 'SamStickyComponent';
  typedoc_content = '';

	example = `<div class="sticky-target usa-grid">
  <div class="usa-width-one-fourth">
    <nav sam-sticky [container]="sticky-target">
      ...
    </nav>
    &nbsp;
  </div>
  <div class="usa-width-three-fourths">
      ...
  </div>
</div>`;

  public base = '_docs/directives/sticky/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
