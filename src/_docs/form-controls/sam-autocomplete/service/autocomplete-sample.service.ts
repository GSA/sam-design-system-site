/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  SAMSDSAutocompleteServiceInterface,
  SAMSDSHiercarchicalServiceResult,
} from '@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/autocomplete-search/models/SAMSDSAutocompleteServiceInterface';
import { map } from 'rxjs/operators';

import { SampleAutocompleteData } from './autocomplete-sample.data';

@Injectable()
export class AutocompleteSampleDataService
  implements SAMSDSAutocompleteServiceInterface {
  private loadedData;
  constructor() {
    const data = SampleAutocompleteData;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let results = data.filter((it) => it.parentId === item.id);
      item['childCount'] = results.length;
    }
    this.loadedData = data;
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SAMSDSHiercarchicalServiceResult> {
    let itemIncrease = 25;
    let data = of(this.loadedData);
    let itemsOb: Observable<Object[]>;

    if (searchValue) {
      itemsOb = data.pipe(
        map((items) =>
          items.filter(
            (itm) =>
              itm.name.indexOf(searchValue) !== -1 ||
              itm.subtext.indexOf(searchValue) !== -1
          )
        )
      );
    } else {
      itemsOb = data;
    }

    let items: object[];
    itemsOb.subscribe((result) => {
      items = result;
    });
    let totalItemCount = items.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    let subItemsitems = items.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount,
    };
    return of(returnItem);
  }
}
