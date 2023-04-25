/* tslint:disable */
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { SamHiercarchicalServiceInterface,SamHiercarchicalServiceSearchItem, SamHiercarchicalServiceResult } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';
import { Sort } from '@gsa-sam/sam-ui-elements/src/ui-kit/components/data-table/sort.directive'

import { SampleHierarchicalData } from './hierarchical.data';


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

    getDataByText(currentItems: number, searchValue?: string): Observable<SamHiercarchicalServiceResult> {
        let itemIncrease = 25;
        let data = of(this.loadedData);
        let itemsOb: Observable<Object[]>;
        if (searchValue) {
            itemsOb = data.pipe(map(items => items.filter(itm =>
                (itm.name.indexOf(searchValue) !== -1 ||
                    itm.subtext.indexOf(searchValue) !== -1
                ))));
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
        return of(returnItem);
    }

    getHiercarchicalById(item:SamHiercarchicalServiceSearchItem): Observable<SamHiercarchicalServiceResult> {
        let itemIncrease = 15;
        let temp = this.getSortedData(this.loadedData,item. sort);
        let data = of(temp);
        let itemsOb: Observable<Object[]>;
        if (item.searchValue) {
            itemsOb = data.pipe(map(items => items.filter(itm =>
                itm.parentId ===item. id &&
                (itm.name.indexOf(item.searchValue) !== -1 ||
                    itm.subtext.indexOf(item.searchValue) !== -1
                ))));
        } else {
            itemsOb = data.pipe(map(items => items.filter(itm => itm.parentId === item.id)));
        }
        let items: object[];
        itemsOb.subscribe(
            (result) => {
                items = result;
            }
        );
        let totalItemCount = items.length;

        let maxSectionPosition = item.currentItemCount + itemIncrease;
        if (maxSectionPosition > totalItemCount) {
            maxSectionPosition = totalItemCount;
        }
        let subItemsitems = items.slice(item.currentItemCount, maxSectionPosition);

        let returnItem = {
            items: subItemsitems,
            totalItems: totalItemCount
        };      
        return of(returnItem);
    }


    private getSortedData(data: any[], sort: Sort): any[] {
        if (!sort || (!sort.active || sort.direction === '')) { return data; }
        return data.sort((a, b) => {
            let propertyA = this.sortingDataAccessor(a, sort.active);
            let propertyB = this.sortingDataAccessor(b, sort.active)
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
    }

    private sortingDataAccessor: ((data: any, sortHeaderId: string) => string | number) =
        (data: any, sortHeaderId: string): string | number => {
            const value = (data as { [key: string]: any })[sortHeaderId];
            return value;
        }

}
