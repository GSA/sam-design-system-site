import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

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
  typedoc_target = "SamPaginationComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = `<samPagination [currentPage]="paginationConfig.currentPage" [totalPages]="paginationConfig.totalPages"></samPagination>`;
}