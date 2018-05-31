import {
  Component,
  ContentChild,
  AfterContentInit,
  HostBinding,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SampleData } from './datasource';
import { ReportDatabase, SampleDataSource } from './database';
import { SamSortDirective } from 'sam-ui-elements/src/ui-kit/experimental/data-table/sort.directive';
import 'rxjs/add/observable/merge';
import { SamModalComponent } from 'sam-ui-elements/src/ui-kit/components/modal';
import { SamDatabankPaginationComponent } from '.';


@Component({
  selector: 'sam-layout-demo-component',
  templateUrl: './layout.template.html'
})
export class SamLayoutDemoComponent {
  _reportData = SampleData;
  reportDatabase = new ReportDatabase();
  dataSource: SampleDataSource | null;
  referenceColumns = [];
  displayedColumns = [];

  public orgOptions: any[] = [
    {label: 'Published Date', name: 'Published Date', value: 'Published Date'},
    {label: 'Modified Date', name: 'Modified Date', value: 'Modified Date'}
  ];

  public assistanceOptions: any[] = [
    { key: 'fg', value: 'Formula Grants'},
    { key: 'fga', value: 'Formula Grants (Apportionments)'},
    { key: 'fgca', value: 'Formula Grants (Cooperative Agreements)'},
    { key: 'fghig', value: 'Formula Grants (Health Incentive Grants)' },
    { key: 'ca', value: 'Cooperative Agreements'},
    { key: 'cadg', value: 'Cooperative Agreements (Discretionary Grants)'}
  ];

  public assistanceConfig = {
    keyProperty: 'key',
    valueProperty: 'value'
  };

  public editFields = false;
  public options: any;
  public filterItems = [];
  public curPage = 1;
  public totalPages;

  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  @ViewChild(SamModalComponent) fieldsEditor: SamModalComponent;
  @ViewChild('paginator') _paginator: SamDatabankPaginationComponent;

  public ngOnInit() {
    this.options = this.checkboxOptions();
    this.connect();
  }

  public toggleFieldsEditor () {
    this.fieldsEditor.openModal();
  }

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
      this.reportDatabase,
      this._paginator,
      this._sort,
    );
  }

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

  toggleColumns() {
    this.displayedColumns = this.referenceColumns.slice(0);
    for(const option of this.options.organization.options){
      const optionValue = option.value;
      if (this.options.organization.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for(const option of this.options.listing.options){
      const optionValue = option.value;
      if (this.options.listing.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }

    for(let option of this.options.status.options){
      const optionValue = option.value;
      if (this.options.status.selected.indexOf(option.value) === -1) {
        delete this.displayedColumns[this.displayedColumns.indexOf(option.value)];
      }
    }
  }
}