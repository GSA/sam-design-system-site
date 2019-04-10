import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sort',
  templateUrl: './component-example.html'
})
export class SamSortComponentExampleComponent {
  sortConfig = {
    currentPage: 1,
    totalPages: 4
  };
}
