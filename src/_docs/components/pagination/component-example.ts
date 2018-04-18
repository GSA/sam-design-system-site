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
	selector: 'doc-pagination',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<sam-pagination [currentPage]="paginationConfig.currentPage" [totalPages]="paginationConfig.totalPages"></sam-pagination>
</doc-template>
`
})
export class PaginationExampleComponent extends BaseExampleComponent implements OnInit {
  paginationConfig = {
    currentPage: 1,
    totalPages: 4
  };
  typedoc_target = 'SamPaginationComponent';
  typedoc_content = '';

  example = `<samPagination [currentPage]="paginationConfig.currentPage" [totalPages]="paginationConfig.totalPages"></samPagination>`;

  public base = '_docs/components/pagination/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
