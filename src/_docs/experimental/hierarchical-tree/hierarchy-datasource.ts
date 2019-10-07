
import {merge as observableMerge,  BehaviorSubject ,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import {
  SamSortDirective,
} from '@gsa-sam/sam-ui-elements';
import { DataSource } from '@angular/cdk';





// export class HierarchyDatabase {
//   dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
//   get data(): any[] { return this.dataChange.value; }
//   constructor(private dataItems: any[]) {
//     for (let i = 0; i < 1940; i++) { this.addProgram(); }
//   }
//   addProgram() {
//     const copiedData = this.data.slice();
//     copiedData.push(this.createNewProgram());
//     this.dataChange.next(copiedData);
//   }
//   private createNewProgram() {
//     return this.dataItems[this.data.length];
//   }
// }


export class HierarchyDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  filteredData: any[] = [];
  renderedData: any[] = [];
 // hierarchyDatabase = new HierarchyDatabase(null);

  constructor(private _sort: SamSortDirective,
    private dataChange: any) {
    super();
  }

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.dataChange,
      this._sort.samSortChange,
      this._filterChange,
    ];
    return observableMerge(...displayDataChanges).pipe(map(() => {
      const filteredData = this.dataChange.value.slice().filter((item: any) => {
        const searchStr = JSON.stringify(item).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.getSortedData(filteredData.slice());
      this.renderedData = sortedData;
      return this.renderedData;
    }));
  }
  disconnect() { }
  /** Returns a sorted copy of the database data. */

  getSortedData(data: any[]): any[] {
    if (!this._sort.active || this._sort.direction === '') { return data; }
    return data.sort((a, b) => {
      const propertyA = this.sortingDataAccessor(a, this._sort.active);
      const propertyB = this.sortingDataAccessor(b, this._sort.active);
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  sortingDataAccessor: ((data: any, sortHeaderId: string) => string | number) =
    (data: any, sortHeaderId: string): string | number => {
      const value = (data as { [key: string]: any })[sortHeaderId];
      return value;
    }
}
