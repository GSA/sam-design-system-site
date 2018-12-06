
import {
  Component, OnInit, ViewChild
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs-compat';

import { MdPaginator } from '@angular/material';
import { SamSortDirective } from '@gsa-sam/sam-ui-elements';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export interface ProgramData {
  'id': number;
  'parentId': string | number;
  'name': string;
  'subtext': string;
  'type': string;
}


export class HierarchyDatabase {

  dataChange: BehaviorSubject<ProgramData[]> = new BehaviorSubject<ProgramData[]>([]);
  get data(): ProgramData[] { return this.dataChange.value; }
  constructor() {
    for (let i = 0; i < 1940; i++) { this.addProgram(); }
  }
  addProgram() {
    const copiedData = this.data.slice();
    // copiedData.push(this.createNewProgram());
    this.dataChange.next(copiedData);
  }
  private createNewProgram() {
    // return ReportData[this.data.length];
  }
}

export class HierarchyDataSource extends DataSource<any> {

  constructor(private _hierarchyDatabase: HierarchyDatabase,
    private _paginator: MdPaginator,
    private _sort: SamSortDirective) {
    super();
  }
  connect(): Observable<ProgramData[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.samSortChange,
      this._hierarchyDatabase.dataChange
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }
  disconnect() { }
  getSortedData(): ProgramData[] {
    const data = this._hierarchyDatabase.data.slice();
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a['id'], b['id']]; break;
        case 'parentId': [propertyA, propertyB] = [a['parentId'], b['parentId']]; break;
        case 'name': [propertyA, propertyB] = [a['name'], b['name']]; break;
        case 'subtext': [propertyA, propertyB] = [a['subtext'], b['subtext']]; break;
        case 'type': [propertyA, propertyB] = [a['type'], b['type']]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}


@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent implements OnInit {
  @ViewChild(MdPaginator) _paginator: MdPaginator;
  @ViewChild(SamSortDirective) _sort: SamSortDirective;
  data: any[];
  database = new HierarchyDatabase();
  dataSource: HierarchyDataSource | null;

  constructor(public service: HierarchicalDataService) {
    this.service.getDataByText(null).subscribe(
      (res) => {
        this.data = res;
      });
    // {id: "1", parentId: null, name: "Level 1", subtext: "id 1", type: "Level 1"}
  }

  configurations: any = {
   // displayedColumns: ['id', 'name'],
    displayedColumns: ['cfdaNumber', 'agency', 'title'],
    type: 'table',
  };

  public ngOnInit() {

    this.dataSource = new HierarchyDataSource(
      this.database,
      this._paginator,
      this._sort
    );
  }

}
