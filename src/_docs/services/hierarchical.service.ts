/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SamHiercarchicalServiceInterface } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';

import { SampleHierarchicalData } from './hierarchical.data';
import 'rxjs/add/observable/of';

@Injectable()
export class HierarchicalDataService implements SamHiercarchicalServiceInterface {

    getDataByText(searchValue?: string): Observable<object[]> {
        let data = Observable.of(SampleHierarchicalData);

        if (searchValue) {
            return data.map(items => items.filter(itm =>
                (itm.name.indexOf(searchValue) !== -1 ||
                    itm.subtext.indexOf(searchValue) !== -1
                )));
        } else {
            return data;
        }
    }

    getHiercarchicalById(id?: string): Observable<object[]> {
        let data = Observable.of(SampleHierarchicalData);
        return data.map(items => items.filter(itm => itm.parentId === id));
    }


}
