import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <sam-info-accordion [data]="dataConfig"></sam-info-accordion>
  </div>
</div>`;

@Component({
	selector: 'doc-info-accordion',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class InfoAccordionExampleComponent extends BaseExampleComponent implements OnInit {
  dataConfig = [
    {
      title: 'Federal Acquisition Regulation',
      detail: 'Details for Federal Acquisition Regulation: ',
      link: 'View FAR',
      url: 'https://www.acquisition.gov/?q=browsefar',
      img: 'http://placehold.it/200x200'
    },
    {
      title: 'Federal Acquisition Regulation',
      detail: 'Details for Federal Acquisition Regulation: ',
      link: 'View FAR',
      url: 'https://www.acquisition.gov/?q=browsefar',
      img: 'http://placehold.it/200x200'
    },
    {
      title: 'SBA Commercial Market Representative',
      detail: 'Details for SBA Commercial Market Representative: ',
      link: 'View SBA CMR',
      url: 'https://www.sba.gov/contracting/resources-small-businesses/commercial-market-representatives',
      img: 'http://placehold.it/200x200'
    },
    {
      title: 'Request DUNS Number',
      detail: 'Details for Request DUNS Number: ',
      link: 'View DUNS Number',
      url: 'http://fedgov.dnb.com/webform',
      img: 'http://placehold.it/200x200'
    }
  ];
  typedoc_target = 'SamInfoAccordionComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/info-accordion/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
