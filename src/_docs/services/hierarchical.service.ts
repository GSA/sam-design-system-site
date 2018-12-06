/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SamHiercarchicalServiceInterface, SearchByTextResult } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';

import { SampleHierarchicalData } from './hierarchical.data';
import 'rxjs/add/observable/of';

@Injectable()
export class HierarchicalDataService implements SamHiercarchicalServiceInterface {

    getDataByText(searchValue?: string): Observable<SearchByTextResult> {
        let itemIncrease = 25;
        // items: object[];
        // totalItems: number;
        let data = Observable.of(SampleHierarchicalData);
        let itemsOb: Observable<Object[]>;
        if (searchValue) {
            itemsOb = data.map(items => items.filter(itm =>
                (itm.name.indexOf(searchValue) !== -1 ||
                    itm.subtext.indexOf(searchValue) !== -1
                )));
        } else {
            itemsOb = data;
        }

        let items: object[];
        itemsOb.subscribe(
            (result) => {
                items = result;
            }

        );


        let totalItemCount = items.length;

        let returnItem = {

            items: items,
            totalItems: totalItemCount
        };


        return Observable.of(returnItem);

    }

    getHiercarchicalById(id?: string): Observable<object[]> {
        let data = Observable.of(SampleHierarchicalData);
        return data.map(items => items.filter(itm => itm.parentId === id));
    }


}
