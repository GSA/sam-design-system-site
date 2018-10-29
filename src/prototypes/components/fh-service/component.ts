import { Component, OnInit } from '@angular/core';
import { FHServiceMock } from './fh.service.mock';
import { Subscription, Subject, Observable } from 'rxjs';


@Component({
  selector: 'doc-fh-service-demo',
  template: `
  <h1>Federal Hierarchy Mock Service Demo</h1>
    <label>Search<br/>
      <input type="text" (change)="search.next($event.target.value)">
    </label>
    <ul>
      <li *ngFor="let result of results | async">
        <span>{{ result.name }}</span>
      </li>
    </ul>

    <label>Get Departments<br/>
      <input type="text" (change)="deptSearch.next($event.target.value)">
    </label>
    <ul>
      <li *ngFor="let dept of departments | async">
        <span>{{ dept?.org?.name }}</span>
      </li>
    </ul>

    <label>Get Organizations<br/>
      <input type="text" (change)="orgSearch.next($event.target.value)">
    </label>
    <ul>
      <li *ngFor="let org of organizations | async">
        <span>{{ org?.org?.name }}</span>
      </li>
    </ul>

  `,
  providers: [
    FHServiceMock
  ]
})
export class DocFHServiceDemo implements OnInit {

  public search = new Subject();
  public deptSearch = new Subject();
  public orgSearch = new Subject();
  public results;
  public departments;
  public organizations;

  constructor (private _fh: FHServiceMock) {}

  public ngOnInit () {

    this.results = this.search.flatMap(
      evt => evt ? this._fh.search() : Observable.of(undefined)
    ).map(
      (evt: any | undefined) => evt && evt._embedded && evt._embedded.results ? evt._embedded.results : []
    );

    this.departments = this.deptSearch.flatMap(
      evt => evt ? this._fh.getDepartments() : Observable.of(undefined)
    ).map(
      evt => evt && evt._embedded ? evt._embedded : []
    );

    this.organizations = this.orgSearch.flatMap(
      evt => evt ? this._fh.getOrganizations() : Observable.of(undefined)
    ).map(
      evt => evt && evt._embedded.orgs && evt._embedded.orgs ? evt._embedded.orgs : []
    );

    this.results.subscribe(
      evt => console.log(evt)
    );

    this._fh.getDepartments().subscribe(
      evt => console.log(evt)
    );

    this._fh.getOrganizations().subscribe(
      evt => console.log(evt)
    );

    this._fh.search().subscribe(
      evt => console.log(evt)
    );
  }

}
