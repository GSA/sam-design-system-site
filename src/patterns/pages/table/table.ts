import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }
  public sortData(evt, data) {
    let sortedData;
    if (!evt.active || evt.direction === '') {
      sortedData = data;
      return;
    }

    const isAsc = evt.direction === 'asc';
    sortedData = data.sort((a, b) => {
      switch (evt.active) {
        case 'name':
          return this.compareString(a.name, b.name, isAsc);
        case 'symbol':
          return this.compareString(a.symbol, b.symbol, isAsc);
        case 'weight':
          return this.compareNumber(a.weight, b.weight, isAsc);
        case 'position':
          return this.compareNumber(a.position, b.position, isAsc);
        default:
          return 0;
      }
    });

    this.setData(sortedData);
  }
  setData(sortedData) {
    this.data.next(sortedData);
  }
  compareNumber(a, b, isAsc) {
    return (a - b) * (isAsc ? 1 : -1);
  }

  compareDate(a, b, isAsc) {
    const c = new Date(a);
    const d = new Date(b);
    return (c < d ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareString(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  disconnect() {}
}

@Component({
  templateUrl: 'table.html',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: ExampleDataSource | null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource();
    this.cdr.detectChanges();
  }

  sortData(event): void {
    console.log('Sorted column');
  }
  onSortChange(evt) {
    this.dataSource.sortData(evt, ELEMENT_DATA);
  }
}
