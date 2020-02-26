
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { SampleData } from './data';



import { SamPageNextService } from '@gsa-sam/sam-ui-elements';

export interface SampleDataDef {
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

export class SampleDatabase {
  dataChange: BehaviorSubject<SampleDataDef[]> =
    new BehaviorSubject<SampleDataDef[]>([]);

  get data(): SampleDataDef[] {
    return this.dataChange.value;
  }

  constructor() {
    for (let i = 0; i < 1940; i++) {
      this.addProgram();
    }
  }

  addProgram() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewProgram());
    this.dataChange.next(copiedData);
  }

  private createNewProgram() {
    return SampleData[this.data.length];
  }
}

export class SampleDataSource extends DataSource<any> {

  constructor(
    private _sampleDatabase: SampleDatabase,
    private _service: SamPageNextService) {
    super();
    this._sampleDatabase.dataChange.subscribe(
      data => this._service.model.properties.data
        .setValue(data)
    );
  }

  connect(): Observable<SampleDataDef[]> {

    const sub = this._service.model.valueChanges.pipe(
      map(model => this._getSortedData(model.data)),
      map(data => this._filtersMap(data)));

    return sub;
  }

  disconnect() { }

  private _getSortedData(model): SampleDataDef[] {
    const data = this._sampleDatabase.data.slice();
    const state = this._service.model.value;

    if (!state.sort.active || state.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (state.sort.active) {
        case 'Agency':
          [propertyA, propertyB] =
            [a['Agency'], b['Agency']];
          break;
        case 'CFDANumber':
          [propertyA, propertyB] =
            [a['CFDA Number'], b['CFDA Number']];
          break;
        case 'Title':
          [propertyA, propertyB] = [a['Title'], b['Title']];
          break;
        case 'CurrentStatus':
          [propertyA, propertyB] =
            [a['Current Status'], b['Current Status']];
          break;
        case 'LastUpdatedDate':
          [propertyA, propertyB] = [
            new Date(a['Last Updated Date']).getTime(),
            new Date(b['Last Updated Date']).getTime()];
          break;
        case 'ObligationsUpdated':
          [propertyA, propertyB] = [
            a['Obligations Updated'],
            b['Obligations Updated']
          ];
          break;
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
        case 'AutoPublished':
          [propertyA, propertyB] =
            [a['Auto Published'], b['Auto Published']];
          break;
        default:
          return;
      }

      const valueA = isNaN(+propertyA)
        ? propertyA
        : +propertyA;

      const valueB = isNaN(+propertyB)
        ? propertyB
        : +propertyB;

      return (valueA < valueB ? -1 : 1)
        * (state.sort.direction === 'asc' ? 1 : -1);
    });
  }

  private _filtersMap(data) {
    const model = this._service.model.value;

    // fh filter
    const fh = model.filters.fhInputText;
    if (!!fh) {
      data = data.filter((row) => {
        if (row.Agency.toLowerCase()
          .includes(fh.toLowerCase())) {
          return true;
        }
      });
    }

    // date filter
    const date = model.filters.dateModel;
    if (!!date && date !== 'Invalid Date') {
      const dateB = new Date(date);
      data = data.filter((row) => {
        const dateA = new Date(row['Last Updated Date']);
        if (dateA.getDate() === (dateB.getDate() + 1) &&
          dateA.getMonth() === dateB.getMonth() &&
          dateA.getFullYear() === dateB.getFullYear()) {
          return true;
        }
      });
    }

    // Pagination
    const pag = model.pagination;
    const last = (pag.currentPage * pag.pageSize);
    const startIndex = last - pag.pageSize;

    data = data.splice(startIndex, pag.pageSize);

    return data;
  }
}
