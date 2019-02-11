/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SamHiercarchicalServiceInterface, SearchByTextResult } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';
import { Sort } from '@gsa-sam/sam-ui-elements/src/ui-kit/components/data-table/sort.directive'

import { SampleHierarchicalData } from './hierarchical.data';
import 'rxjs/add/observable/of';

@Injectable()
export class HierarchicalDataService implements SamHiercarchicalServiceInterface {

    private loadedData;
    constructor() {
        const data = SampleHierarchicalData;
        for (let i = 0; i < data.length; i++) {

            let item = data[i];
            let results = data.filter(it => it.parentId === item.id);
            item['childCount'] = results.length;
        }
        this.loadedData = data;
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

    getHiercarchicalById(id: string, searchValue: string, sort: Sort): Observable<object[]> {
        let temp = this.getSortedData(this.loadedData, sort);
        let data = Observable.of(temp);
        if (searchValue) {
            return data.map(items => items.filter(itm => itm.parentId === id && (itm.name.indexOf(searchValue) !== -1 || itm.subtext.indexOf(searchValue) !== -1)));
        } else {
            return data.map(items => items.filter(itm => itm.parentId === id));
        }
    }


    getSortedData(data: any[], sort: Sort): any[] {
        if (!sort || (!sort.active || sort.direction === '')) { return data; }
        return data.sort((a, b) => {
            let propertyA = this.sortingDataAccessor(a, sort.active);
            let propertyB = this.sortingDataAccessor(b, sort.active)
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
    }

    sortingDataAccessor: ((data: any, sortHeaderId: string) => string | number) =
        (data: any, sortHeaderId: string): string | number => {
            const value = (data as { [key: string]: any })[sortHeaderId];
            return value;
        }

}
