/* tslint:disable */
import { Injectable } from '@angular/core';
import { SampleOppData } from './datasource';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';



@Injectable()
export class WorkspaceService {

  constructor() { }

  //Will pass in
  getData(filter: filter) {
    const data = <Opportunity[]>SampleOppData;
    let ob = Observable.of(data);
    let pageSize = 0;
    if (filter) {
      ob = this.filter(ob, filter);
      ob = this.sort(ob, filter);
      if (filter.pageSize && filter.pageSize !== 0) {

        pageSize = filter.pageSize;
      }
    } else {
      pageSize = 10;

    }
    let totalItems = data.length;
    return ob;
  }


  private filter(data: Observable<Opportunity[]>, filter: filter) {

    if (filter.type) {
      data = data.map(projects => projects.filter(proj => proj.data.type === filter.type));
    }

    if (filter.status && filter.status.length > 0) {
      data = data.map(projects => projects.filter(proj => filter.status.indexOf(proj.status.code) !== -1));
    }

    if (filter.title) {
      data = data.map(projects => projects.filter(proj => proj.data.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1));
    }

    if (filter.dateModel) {
      let filterDate = new Date(filter.dateModel);
      if (!isNaN(filterDate.getTime())) {
        data = data.map(projects => projects.filter(proj => {
          let tDate = new Date(proj.createdDate);
          return tDate.getFullYear() + '' + tDate.getMonth() + '' + tDate.getDate() ===
            filterDate.getFullYear() + '' + filterDate.getMonth() + '' + (filterDate.getDate() + 1)
            ;
        }))
      }
    }

    return data;
  }

  sort(data: Observable<Opportunity[]>, filter: filter) {
    if (filter.sortField) {
      console.log(filter.sortField);
      data = data.map(items => items.sort(function (a, b) {
        if (a[filter.sortField] < b[filter.sortField])
          return -1;
        if (a[filter.sortField] > b[filter.sortField])
          return 1;
        return 0;
      }))
    }
    return data;
  }

}

export class filter {
  //zero based
  page: number;
  type: string;
  status: string[];
  title: string;
  dateModel: string;
  pageSize: number;
  sortField: string;
}

export interface City {
  code?: string;
}

export interface State {
  code?: string;
}

export interface Country {
  code?: string;
}

export interface Location {
  zip?: string;
  city?: City;
  state?: State;
  country?: Country;
  streetAddress?: string;
}

export interface Awardee {
  name?: string;
  duns?: string;
  location?: Location;
}

export interface JustificationAuthority {
  authority?: string;
  modificationNumber?: string;
}

export interface Award {
  date?: string;
  amount?: string;
  number?: string;
  awardee?: Awardee;
  lineItemNumber?: string;

  deliveryOrderNumber?: string;
  justificationAuthority?: JustificationAuthority;
}

export interface Flag {
  code?: string;
  isSelected?: boolean;
}

export interface Naic {
  code?: string[];
  type?: string;
}

export interface Archive {
  type?: string;
  date?: string;
}

export interface PointOfContact {
  type?: string;
  email?: string;
  phone?: string;
  fullName?: string;
  title?: string;
  fax?: string;
}

export interface Deadlines {
  response?: string;
  responseTz?: string;
}

export interface Solicitation {
  deadlines?: Deadlines;
  setAside?: string;
}

export interface City2 {
  code?: string;
  name?: string;
}

export interface State2 {
  code?: string;
}

export interface Country2 {
  code?: string;
}

export interface PlaceOfPerformance {
  city?: City2;
  state?: State2;
  country?: Country2;
  streetAddress?: string;
  zip?: string;
}

export interface Data {
  type?: string;
  award?: Award;
  flags?: Flag[];
  naics?: Naic[];
  title: string;
  archive?: Archive;
  organizationId?: string;
  pointOfContact?: PointOfContact[];
  classificationCode?: string;
  solicitationNumber?: string;
  additionalReporting?: string[];
  solicitation?: Solicitation;
  placeOfPerformance?: PlaceOfPerformance;
  orgLevel?: string;
  descriptions?: any[];
  organizationLocationId?: string;
}

export interface Parent {
  opportunityId?: string;
}

export interface Related {
  opportunityId?: string;
}

export interface Status {
  code?: string;
  value?: string;
}

export interface Opportunity {
  data?: Data;
  parent?: Parent;
  related?: Related;
  status?: Status;
  archived?: boolean;
  cancelled?: boolean;
  latest?: boolean;
  postedDate?: string;
  modifiedDate?: string;
  createdDate?: string;
  modifiedBy?: string;
  createdBy?: string;
  id?: string;
}
