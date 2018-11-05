import { Injectable } from '@angular/core';
import { SampleOppData } from './datasource';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor() { }

  //Will pass in 
  getData(filter:filter) {
    let data = <Opportunity[]>SampleOppData;
let pageSize =10;
data.splice(pageSize)
    return data;
  }


  filter(data: Opportunity[], property: string) {




  }

  sort(data: Opportunity[], property: string) {


  }
}

export class filter {

  //zero based
  page:number;



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

export interface FairOpportunity {
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
  fairOpportunity?: FairOpportunity;
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



