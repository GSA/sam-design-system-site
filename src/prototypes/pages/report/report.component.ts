import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReportData } from './DataSource';
import { MdPaginator } from '@angular/material';
import { SamSortDirective } from '../../components/table/sort.directive';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { SamModalComponent } from '../../../../../sam-ui-elements/src/ui-kit/components/modal';

export interface ProgramData {
  'Agency': string;
  'CFDA Number': number;
  'Title': string | number;
  'Current Status': string;
  'Last Updated Date': string;
  'Obligations Updated': string;
  'OMB Review Date': string;
  'Last Published Date': string;
  'Auto Published': string;
}


export class ReportDatabase {
  dataChange: BehaviorSubject<ProgramData[]> = new BehaviorSubject<ProgramData[]>([]);
  get data(): ProgramData[] { return this.dataChange.value; }
  constructor() {
    for (let i = 0; i < 1940; i++) { this.addProgram(); }
  }
  addProgram() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewProgram());
    this.dataChange.next(copiedData);
  }
  private createNewProgram() {
    return ReportData[this.data.length];
  }
}

export class ReportDataSource extends DataSource<any> {

  constructor(private _reportDatabase: ReportDatabase,
              private _paginator: MdPaginator,
              private _sort: SamSortDirective) {
    super();
  }
  connect(): Observable<ProgramData[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.samSortChange,
      this._reportDatabase.dataChange
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }
  disconnect() {}
  getSortedData(): ProgramData[] {
    const data = this._reportDatabase.data.slice();
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'Agency': [propertyA, propertyB] = [a['Agency'], b['Agency']]; break;
        case 'CFDANumber': [propertyA, propertyB] = [a['CFDA Number'], b['CFDA Number']]; break;
        case 'Title': [propertyA, propertyB] = [a['Title'], b['Title']]; break;
        case 'CurrentStatus': [propertyA, propertyB] = [a['Current Status'], b['Current Status']]; break;
        case 'LastUpdatedDate':
          [propertyA, propertyB] = [
            new Date(a['Last Updated Date']).getTime(),
            new Date(b['Last Updated Date']).getTime()];
          break;
        case 'ObligationsUpdated': [propertyA, propertyB] = [a['Obligations Updated'], b['Obligations Updated']]; break;
        case 'OMBReviewDate':
          [propertyA, propertyB] = [
            new Date(a['OMB Review Date']).getTime(),
            new Date(b['OMB Review Date']).getTime()];
          break;
        case 'LastPublishedDate':
          [propertyA, propertyB] = [
            new Date(a['Last Published Date']).getTime(),
            new Date(b['Last Published Date']).getTime()];
          break;
        case 'AutoPublished': [propertyA, propertyB] = [a['Auto Published'], b['Auto Published']]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}


@Component({
  templateUrl: 'report.template.html'
})
export class ReportPageComponent implements OnInit {
  _reportData = ReportData;
  reportDatabase = new ReportDatabase();
  dataSource: ReportDataSource | null;
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

  @ViewChild(MdPaginator) _paginator: MdPaginator;
  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  @ViewChild(SamModalComponent) fieldsEditor: SamModalComponent;

  public ngOnInit() {
    this.connect();
  }

  public toggleFieldsEditor () {
    this.editFields = !this.editFields;
    this.fieldsEditor.open();
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
    this.dataSource = new ReportDataSource(this.reportDatabase,
      this._paginator, this._sort);
  }
}
