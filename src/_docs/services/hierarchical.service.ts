/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SamHiercarchicalServiceInterface, SearchByTextResult } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';

import { SampleHierarchicalData } from './hierarchical.data';
import 'rxjs/add/observable/of';

@Injectable()
export class HierarchicalDataService implements SamHiercarchicalServiceInterface {

private loadedData;
    constructor(){
        const data = SampleHierarchicalData;
        for (let i = 0; i < data.length; i++) {

            let item = data[i];
            let results = data.filter(it => it.parentId === item.id);
            item['childCount'] = results.length;
        }
        
        this.loadedData= data;
    }

    getDataByText(currentItems: number, searchValue?: string): Observable<SearchByTextResult> {
        let itemIncrease = 25;
        let data = Observable.of(this.loadedData);
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

        let maxSectionPosition = currentItems + itemIncrease;
        if (maxSectionPosition > totalItemCount) {
            maxSectionPosition = totalItemCount;
        }
        let subItemsitems = items.slice(currentItems, maxSectionPosition);

        let returnItem = {
            items: subItemsitems,
            totalItems: totalItemCount
        };
        return Observable.of(returnItem);
    }

    getHiercarchicalById(id?: string, searchValue?: string): Observable<object[]> {
        let data = Observable.of(this.loadedData);
        if (searchValue) {
            return data.map(items => items.filter(itm => itm.parentId === id && (itm.name.indexOf(searchValue) !== -1 || itm.subtext.indexOf(searchValue) !== -1)));
        } else {
            return data.map(items => items.filter(itm => itm.parentId === id));
        }
    }
  
}
