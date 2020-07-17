import { Component } from '@angular/core';
import { AutocompleteService } from '@gsa-sam/sam-ui-elements';
import { Observable, of } from 'rxjs';

export class ACTestService implements AutocompleteService {
  private values: any = [
    { key: 'Random', value: 'Random' },
    { key: 'Just some data', value: 'Just some data' },
    { key: 'This has no category', value: 'This has no category' },
    { key: 'I have no parent', value: 'I have no parent' },
    { key: 'Christy', value: 'Christy' },
    { key: 'Carlos', value: 'Carlos' },
    { key: 'Colin', value: 'Colin' },
    { key: 'Diego', value: 'Diego' },
    { key: 'Delaware', value: 'Delaware' },
    { key: 'Maryland', value: 'Maryland' },
    { key: 'Virginia', value: 'Virginia' },
    { key: 'Washington, DC', value: 'Washington, DC' },
    { key: 'Onitama', value: 'Onitama' },
    { key: 'Power Grid', value: 'Power Grid' },
    { key: 'Splendor', value: 'Splendor' },
    { key: 'Ticket To Ride', value: 'Ticket to Ride' },
  ];

  private offset: number = 1;
  private limit: number = 0;

  private start: number = 0;
  private end: number = 2;
  private lastSearch: string;

  public setFetchMethod(_: any) {}

  public resetPagination() {
    this.start = 0;
    this.end = 2;
  }

  public fetch(val: string, pageEnd: boolean, serviceOptions: any) {
    if (val !== this.lastSearch) {
      this.resetPagination();
    }

    if (pageEnd && val === this.lastSearch) {
      this.start = this.end;
      this.end = this.end + 2;
      if (this.end > this.values.length) {
        return of([]);
      }
    }

    this.lastSearch = val;

    return of(this.filter(val).slice(this.start, this.end));
  }

  private filter(val) {
    return this.values.filter((value) => {
      if (
        value.key.toLowerCase().includes(val.toLowerCase()) ||
        value.value.toLowerCase().includes(val.toLowerCase())
      ) {
        return value;
      }
    });
  }
}

@Component({
  selector: 'doc-autocomplete-multiselect',
  templateUrl: './component-example.html',
})
export class SamAutocompleteMultiselectComponentExampleComponent {
  value = 'apple';
  value2 = { code: 'code05', value: 'pineapple' };
  multiselectOptions = [
    { key: 'Apple', value: 'Apple' },
    { key: 'Grape', value: 'Grape' },
    { key: 'Banana', value: 'Banana' },
    { key: 'Orange', value: 'Orange' },
    { key: 'Acorn', value: 'Acorn' },
  ];
  multiselectConfig = {
    keyProperty: 'key',
    valueProperty: 'value',
  };
}
