import { Component, OnInit, forwardRef, ChangeDetectorRef, ContentChild, ViewChild, AfterContentInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SamSortDirective, SamPaginationNextComponent } from '@gsa-sam/sam-ui-elements';

import { SamModalComponent } from '@gsa-sam/sam-ui-elements';
import { SamPageNextService } from '@gsa-sam/sam-ui-elements';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WorkspaceService, filter } from './data/workspace.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { fields, model, } from './data/formly';


import {
  faTable,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sam-workspace-demo-component',
  templateUrl: './workspace.template.html',
  providers: [
    WorkspaceService,
    forwardRef(() => SamPageNextService)
  ]
})
export class SamWorkspaceDemoComponent implements OnInit, AfterContentInit {
  public form: UntypedFormGroup;
  public model = model;
  public filters: Observable<any>;
  public fields: FormlyFieldConfig[] = fields;
  public faChartBar = faChartBar;
  public fieldsEditor: SamModalComponent;
  public length: number;
  public optionsBackup: any;
  public dataSource: any[];
  public filter: filter = new filter();
  public curPage = 1;
  public error: any;
  public filterItems = [];
  public data: any[];
  public options = [
    { value: 'title', label: 'Title', name: 'title' },

    { value: 'createdDate', label: 'Created Date', name: 'date' },
  ];
  public sortvalue: string;

  @ViewChild(SamPaginationNextComponent, { static: true })
  public pagination: SamPaginationNextComponent;

  constructor(private _fb: UntypedFormBuilder,
    private wsService: WorkspaceService,
    private cdr: ChangeDetectorRef,
    private _service: SamPageNextService) {
    this.form = this._fb.group({
    });
  }

  public ngAfterContentInit() {
    this.pagination.pageChange.subscribe(
      evt => this._onPageChange(evt)
    );


  }


  private _onPageChange(event) {

    const pg = {
      pageSize: this.pagination.pageSize,
      currentPage: this.pagination.currentPage,
      // totalPages1: this.pagination.totalPages,
      totalUnits: this.pagination.totalUnits
    };

    this.filter.page = pg.currentPage - 1;
    this.getData(this.filter);

  }

  public ngOnInit() {
    this.getData(this.filter);

    this.filters = this._service.get('filters').valueChanges.pipe(
      map(res => this._filtersToPills(res)));

    this.filters.subscribe(data => {
      this.curPage = 1;
      if (data.length !== 0) {
        this._service.get('data').setValue(this.dataSource.slice(0, 1));
      } else {
        this._service.get('data').setValue(this.dataSource);
      }
    });

    this._service.get('pagination').valueChanges.subscribe(result => {
      this.curPage = result.currentPage;
      this._service.get('data').setValue(this.dataSource);
    });
    this.cdr.detectChanges();

    this.form.valueChanges.subscribe(
      res => {
        this._service.get('filters').patchValue(res);
        this.getData(res);
      }
    );

  }

  onSortChange(sortvalue: string) {
    this.filter.sortField = sortvalue;
    this.getData(this.filter);
  }

  getData(item: filter): void {
    this.wsService.getData(item).subscribe(
      (data) => {
        this.length = data.totalItems;
        data.result.subscribe(
          (data2) => {

            this.dataSource = data2;
          }
        );
      },
      (error) => {
        this.error = error;
      });
  }

  private _filtersToPills(filters): any[] {
    const keys = Object.keys(filters);

    return keys.map(key => {
      let value;

      if (filters[key]) {
        if (filters[key].constructor === Array) {
          value = filters[key];
        } else {
          value = [filters[key]];
        }
      } else {
        value = [];
      }

      return {
        label: key,
        value: value
      };
    })
      .filter(res => res.value.length > 0);
  }
}
