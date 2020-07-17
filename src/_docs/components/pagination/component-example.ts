import { Component } from '@angular/core';

@Component({
  selector: 'doc-pagination',
  templateUrl: './component-example.html',
})
export class SamPaginationComponentExampleComponent {
  paginationConfig = {
    currentPage: 1,
    totalPages: 4,
  };
}
