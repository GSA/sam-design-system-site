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
    this.displayedColumns = [
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
        {label: 'Dept or Ind. Agency', name: 'Dept or Ind. Agency', value: 'Dept or Ind. Agency'},
        {label: 'Subtier', name: 'Subtier', value: 'Subtier'}
      ],
      selected: ['Dept or Ind. Agency']
    };
    // organization.options.forEach(
    //   option => organization.selected.push(option.value)
    // );

    const listing = {
      label: 'Listing',
      options: [
        {label: 'CFDA Number', name: 'CFDA Number', value: 'CFDA Number'},
        {label: 'Title', name: 'Title', value: 'Title'},
        {label: 'Obligations', name: 'Obligations', value: 'Obligations'},
        {label: 'Post (FY16)', name: 'Post (FY16)', value: 'Post (FY16)'},
        {label: 'Current (FY17)', name: 'Current (FY17)', value: 'Current (FY17)'},
        {label: 'Budget (FY18)', name: 'Budget (FY18)', value: 'Budget (FY18)'}
      ],
      selected: []
    };
    // listing.options.forEach(
    //   option => listing.selected.push(option.value)
    // );

    const status = {
      label: 'Status',
      options: [
        {label: 'Current Status', name: 'Current Status', value: 'Current Status'},
        {label: 'Updated in Current Year', name: 'Updated in Current Year', value: 'Updated in Current Year'},
        {label: 'Obligations Updated', name: 'Obligations Updated', value: 'Obligations Updated'},
        {label: 'Last Updated Date', name: 'Last Updated Date', value: 'Last Updated Date'},
        {label: 'OMB Review Date', name: 'OMB Review Date', value: 'OMB Review Date'},
        {label: 'Last Published Date', name: 'Last Published Date', value: 'Last Published Date'}
      ],
      selected: []
    };
    // status.options.forEach(
    //   option => status.selected.push(option.value)
    // );

    return {
      organization,
      listing,
      status
    };
  }

  toggleColumns() {
    if (this.options.organization.selected.indexOf('Dept or Ind. Agency') !== -1
      && this.displayedColumns.indexOf('Agency') === -1) {
      this.displayedColumns.unshift('Agency');
    } else if (this.options.organization.selected.indexOf('Dept or Ind. Agency') === -1
      && this.displayedColumns.indexOf('Agency') !== -1) {
      this.displayedColumns.shift();
    }
  }
}