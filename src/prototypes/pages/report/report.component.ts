import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReportData } from './DataSource';
import { MdPaginator, MdSort } from '@angular/material';

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


export class ReportDataSource extends DataSource<any>{
  constructor(private _reportDatabase: ReportDatabase,
              private _paginator: MdPaginator,
              private _sort: MdSort){
    super();
  }

  connect(): Observable<ProgramData[]>{
    const displayDataChanges = [
      this._paginator.page,
      this._sort.mdSortChange,
      this._reportDatabase.dataChange
    ];
    return Observable.merge(...displayDataChanges).map(()=> {
      const data = this.getSortedData();
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }
  
  disconnect(){}

  getSortedData(): ProgramData[] {
    const data = this._reportDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'Last Updated Date': [propertyA, propertyB] = [a['Last Updated Date'], b['Last Updated Date']]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }

}


@Component({
  templateUrl: 'report.template.html'
})
export class ReportPageComponent implements OnInit{
  
  _reportData = ReportData;
  reportDatabase = new ReportDatabase();

  dataSource: ReportDataSource | null;
  displayedColumns = [];

  @ViewChild(MdPaginator) _paginator: MdPaginator;

  @ViewChild(MdSort) _sort: MdSort;
  
  ngOnInit(){
    this.connect();
  }
  
  connect(){
    this.displayedColumns = [
      "Agency",
      "CFDANumber",
      "Title",
      "CurrentStatus",
      "LastUpdatedDate",
      "ObligationsUpdated",
      "OMBReviewDate",
      "LastPublishedDate",
      "AutoPublished"
    ];
    this.dataSource = new ReportDataSource(this.reportDatabase, 
      this._paginator, this._sort);
  }
}
