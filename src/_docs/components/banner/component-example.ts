import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

@Component({
	selector: 'doc-banner',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
View the banner at the top
</doc-template>
`
})
export class BannerExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamBannerComponent';
  typedoc_content = '';

  example = `<sam-banner></sam-banner>`; //code example at app level

  public base = '_docs/components/banner/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
