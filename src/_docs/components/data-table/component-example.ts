
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef,
  ElementRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from 'app/services/markdown/markdown.service';
import { DocumentationService } from 'app/services/documentation.service';
import { SamSortable, SamSortDirective } from '@gsa-sam/sam-ui-elements';
import { merge } from 'rxjs/observable/merge';
import { SamPaginationComponent } from '@gsa-sam/sam-ui-elements';
import { DataSource } from '@angular/cdk';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { RECORDS } from './data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ExampleDataSource, ExampleDatabase } from './data-source';

// tabs/spacing matters for code example block
const code_example = `
<div class="example-container usa-grid">
    <div class="example-header">
        <input #filter placeholder="Filter agency or title">
    </div>
    <table sam-datatable #table samSort [dataSource]="dataSource">
        <!-- Column Definition: agency -->
        <ng-container cdkColumnDef="agency">
            <th sam-header-cell *cdkHeaderCellDef sam-sort-header>
                Agency
            </th>
            <td sam-cell *cdkCellDef="let row"> {{row.agency}} </td>
        </ng-container>

        <!-- Column Definition: cfdaNumber -->
        <ng-container cdkColumnDef="cfdaNumber">
            <th sam-header-cell *cdkHeaderCellDef sam-sort-header>CFDA #
            </th>
            <td sam-cell *cdkCellDef="let row"> {{row.cfdaNumber}} </td>
        </ng-container>

        <!-- Column Definition: title -->
        <ng-container cdkColumnDef="title">
            <th sam-header-cell *cdkHeaderCellDef sam-sort-header>
                Title
            </th>
            <td sam-cell *cdkCellDef="let row"> {{row.title}} </td>
        </ng-container>

        <!-- Column Definition: cost -->
        <ng-container cdkColumnDef="cost">
            <th sam-header-cell *cdkHeaderCellDef sam-sort-header>
                Cost
            </th>
            <td sam-cell *cdkCellDef="let row"> {{row.cost}} </td>
        </ng-container>

        <!-- Column Definition: lastUpdatedDate -->
        <ng-container cdkColumnDef="lastUpdatedDate">
            <th sam-header-cell *cdkHeaderCellDef>
                Last Updated
            </th>
            <td sam-cell *cdkCellDef="let row"> {{row.lastUpdatedDate}} </td>
        </ng-container>

        <tr sam-header-row *cdkHeaderRowDef="displayedColumns"></tr>
        <tr sam-row *cdkRowDef="let row; columns: displayedColumns;
            let first = first; let last = last; let even = even; let odd = odd">
        </tr>
    </table>

    <div
        class="example-no-results"
        [style.display]="dataSource.renderedData.length == 0 ? '' : 'none'"
        style="padding:10px 0;">
        No users found matching filter.
    </div>
    <div
        [style.display]="dataSource.renderedData.length != 0 ? '' : 'none'"
        style="text-align:right;">
        <sam-pagination
            class="datatable-example"
            #paginator [currentPage]="curPage"
            [totalPages]="totalPages"></sam-pagination>
    </div>
</div>
`;

@Component({
  selector: 'doc-sam-datatable',
  template: `<doc-template
    [markdown]="markdown"
    [example]="example"
    [guidance]="guidance"
    [typedoc]="typedoc_content">` + code_example + `
  </doc-template>`
})
export class SamDataTableComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamDataTableComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/data-table/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

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
    this.service.getComponentProperties(this.typedoc_target)
    .subscribe(
      (data) => { this.setupTypedocContent(data); },
      (error) => { throw new Error(error); }
    );

    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
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
