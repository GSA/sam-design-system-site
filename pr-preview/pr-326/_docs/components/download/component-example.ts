import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <sam-download [packages]="packages" [downloadAllUrl]="downloadAllUrl"></sam-download>
  </div>
</div>`;

@Component({
  selector: 'doc-download',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class DownloadExampleComponent extends BaseExampleComponent implements OnInit {
  packages = [
    {
      'packageId': '5510527885db16f1d7ae72ecfa8e6567',
      'name': 'Industry Day IV Change of Location',
      'type': 'Other (Draft RFPs/RFIs, Responses to Questions, etc..)',
      'postedDate': 'Apr 07, 2015',
      'access': 'Public',
      'resources': [
        {
          'resourceId': '862178b04be2db1778a697464f186836',
          'name': 'J.pdf',
          'type': 'file',
          'description': 'Industry Day IV change of conference room.',
          'size': '83 kB',
          'downloadUrl': 'http://fakesite.com/download/4444',
          'typeInfo': {
            'name': 'PDF document',
            'iconClass': 'fa fa-file-pdf-o'
          }
        }
      ],
      'accordionState': 'collapsed',
      'downloadUrl': 'http://fakesite.com/download/3333'
    }
  ];
  downloadAllUrl = 'http://fakesite.com/download/1234';
  typedoc_target = 'SamDownloadComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/download/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
