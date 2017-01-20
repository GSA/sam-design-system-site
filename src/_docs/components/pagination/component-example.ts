import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-pagination',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samPagination [currentPage]="paginationConfig.currentPage" [totalPages]="paginationConfig.totalPages"></samPagination>
</doc-template>
`
})
export class PaginationExampleComponent extends BaseExampleComponent implements OnInit {
  paginationConfig = {
    currentPage: 1,
    totalPages: 4
  };
  typedoc_target = "pagination.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samPagination [currentPage]="paginationConfig.currentPage" [totalPages]="paginationConfig.totalPages"></samPagination>`;
}