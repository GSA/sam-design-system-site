import {
  Component,
  ContentChild,
  AfterContentInit,
  HostBinding,
  ViewChild,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SampleData } from './datasource';
import { SampleDatabase, SampleDataSource } from './database';
import { SamSortDirective } from 'sam-ui-elements/src/ui-kit/experimental/data-table/sort.directive';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from 'sam-ui-elements/src/ui-kit/components/modal';
import { SamDatabankPaginationComponent } from '.';
import { cloneDeep } from 'lodash';
import { NgModel, FormBuilder, FormGroup } from '@angular/forms';
import { DataStore } from '../../architecture';

@Component({
  selector: 'sam-layout-demo-component',
  templateUrl: './layout.template.html'
})
export class SamLayoutDemoComponent implements OnInit {
  _sampleData = SampleData;
  sampleDatabase = new SampleDatabase();
  dataSource: SampleDataSource | null;
  referenceColumns = [];
  displayedColumns = [];

  public options: any;
  public optionsBackup: any;
  public filterItems = [];
  public curPage = 1;
  public totalPages;


  public form: FormGroup;
  public model: Observable<any>;
  public filters: Observable<any>;
  public pagination: Observable<any>;
  public data: Observable<any>;
  public length: number;

  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  @ViewChild(SamModalComponent) fieldsEditor: SamModalComponent;
  @ViewChild('paginator') _paginator: SamDatabankPaginationComponent;
  @ViewChild('fhInput') fhInput: NgModel;
  @ViewChild('dateFilter') dateFilter: NgModel;

  constructor (
    private _fb: FormBuilder,
    private _store: DataStore
  ) {
    this.form = this._fb.group({
      fhInputText: [''],
      dateModel: []
    });
  }

  public ngOnInit() {
    this.options = this.checkboxOptions();
    this.connect();

    this.model = this._store.state;
    this.data = this.model.map(model => model.data);

    this.data.subscribe(
      data => this.length = data.length
    );

    this.filters = this.model
      .map(model => this._filtersToPills(model.filters));

    this.pagination = this.model
      .map(model => model.pagination);
  }

  public toggleFieldsEditor () {
    // backup in case of cancel action
    this.optionsBackup = cloneDeep(this.options);
    this.fieldsEditor.openModal();
  }

  // setup datasource
  public connect() {
    this.referenceColumns = [
      'Agency',
      'CFDANumber',
      'Title',
      'CurrentStatus',
      'LastUpdatedDate',
      'ObligationsUpdated',
      'OMBReviewDate',
      'LastPublishedDate',
      'AutoPublished'
    ];
    this.displayedColumns = this.referenceColumns.slice(0);
    // data table
    this.dataSource = new SampleDataSource(
      this.sampleDatabase,
      this._store
    );
  }

  // setup modal checkboxes
  public checkboxOptions (): {organization: any, listing: any, status: any} {

    const organization = {
      label: 'Organization',
      options: [
        {label: 'Dept or Ind. Agency', name: 'Dept or Ind. Agency', value: 'Agency'}
      ],
      selected: [
        'Agency'
      ]
    };

    const listing = {
      label: 'Listing',
      options: [
        {label: 'CFDA Number', name: 'CFDA Number', value: 'CFDANumber'},
        {label: 'Title', name: 'Title', value: 'Title'}
      ],
      selected: [
        'CFDANumber',
        'Title'
      ]
    };

    const status = {
      label: 'Status',
      options: [
        {label: 'Current Status', name: 'Current Status', value: 'CurrentStatus'},
        {label: 'Last Updated Date', name: 'Last Updated Date', value: 'LastUpdatedDate'},
        {label: 'Obligations Updated', name: 'Obligations Updated', value: 'ObligationsUpdated'},
        {label: 'OMB Review Date', name: 'OMB Review Date', value: 'OMBReviewDate'},
        {label: 'Last Published Date', name: 'Last Published Date', value: 'LastPublishedDate'},
        {label: 'Auto Published', name: 'Auto Published', value: 'AutoPublished'}
      ],
      selected: [
        'CurrentStatus',
        'LastUpdatedDate',
        'ObligationsUpdated',
        'OMBReviewDate',
        'LastPublishedDate',
        'AutoPublished'
      ]
    };

    return {
      organization,
      listing,
      status
    };
  }

  // modal action handlers
  cancelModalAction() {
    this.options = cloneDeep(this.optionsBackup);
  }

  submitModalAction() {
    this.fieldsEditor.closeModal(false);
    this.toggleColumns();
  }

  toggleColumns() {
    this.displayedColumns = this.referenceColumns.slice(0);
    for (const option of this.options.organization.options){
      const optionValue = option.value;
      if (this.options.organization.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for (const option of this.options.listing.options){
      const optionValue = option.value;
      if (this.options.listing.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for (const option of this.options.status.options){
      const optionValue = option.value;
      if (this.options.status.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }
  }

  removeFilter(filterItem) {
    const removed = {};
    removed[filterItem.id] = '';
    const newValue = {
      ...this._store.currentState.filters,
      ...removed
    };
    this._store.update(
      {
        type: 'FILTERS_CHANGED',
        payload: newValue
      }
    );
  }

  removeAllFilters() {
    this.form.reset();
  }

  public onPageChange (event) {
    const pg = {
      pageSize: this._paginator.pageSize,
      currentPage: this._paginator.currentPage,
      totalPages: this._paginator.totalPages
    };
    this._store.update(
      {
        type: 'PAGE_CHANGE',
        payload: pg
      }
    );
  }

  public onSortChange (event) {
    this._store.update(
      {
        type: 'SORT_CHANGE',
        payload: event
      }
    );
  }

  private _filtersToPills (filters): any[] {
    const keys = Object.keys(filters);
    return keys.map(
      key => {
        const obj: any = {};
        obj.id = key;
        obj.label = key;
        obj.value = filters[key];
        return obj;
      }
    )
    .filter(
      filter => !!filter.value
    );
  }
}
