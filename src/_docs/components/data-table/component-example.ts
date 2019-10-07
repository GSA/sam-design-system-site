
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import { SamPaginationComponent } from '@gsa-sam/sam-ui-elements';
import { fromEvent } from 'rxjs';
import { ExampleDataSource, ExampleDatabase } from './data-source';

@Component({
  selector: 'doc-sam-datatable',
  templateUrl: './component-example.html'
})
export class SamDataTableComponentExampleComponent implements OnInit {
  pageSize = 10;
  totalPages = 1;
  displayedColumns = ['agency', 'cfdaNumber', 'title', 'cost', 'lastUpdatedDate'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  curPage = 1;
  @ViewChild(SamPaginationComponent) paginator: SamPaginationComponent;
  @ViewChild(SamSortDirective) sort: SamSortDirective;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(
        this.exampleDatabase,
        this.paginator,
        this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

  updateFilter(filterText) {
    this.filter.nativeElement.value = filterText;
    this.dataSource.filter = filterText;
  }
}
