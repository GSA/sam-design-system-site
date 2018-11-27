import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SamHiercarchicalServiceInterface } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-interface';


@Injectable()
export class HierarchicalDataService implements SamHiercarchicalServiceInterface {


    getDataByText(searchValue?: string): Observable<object[]> {
        throw new Error("Method not implemented.");
    }


    getHiercarchicalById(id?: string): Observable<object[]> {
        throw new Error("Method not implemented.");
    }

}