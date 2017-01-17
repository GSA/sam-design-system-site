/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header class="usa-header site-header">
      <div class="usa-navbar site-header-navbar">
        <div class="usa-logo site-logo" id="logo">
          <em class="usa-logo-text">
            <a href="/" accesskey="1" title="Home" aria-label="Home">
            SAM Web Standards</a></em>
        </div>
      </div>
    </header>
    <main>
      <div class="usa-grid">
        <div class="usa-width-one-fourth">
          <nav>
            <ul class="usa-sidenav-list">
              <li><a routerLink="/">Overview</a></li>
              <li><a routerLink="/accordion">Accordions</a></li>
              <li><a routerLink="/alerts">Alerts</a></li>
              <li><a (click)="formControlClick()">Form controls</a><ul class="usa-sidenav-sub_list" *ngIf="displayFormControlSublist" >
                  <li><a routerLink="/form-controls/button">Button</a></li>
                  <li><a routerLink="/form-controls/checkbox">Checkbox</a></li>
                  <li><a routerLink="/form-controls/date">Date</a></li>
                  <li><a routerLink="/form-controls/date-time">DateTime</a></li>
                  <li><a routerLink="/form-controls/multiselect">Multiselect</a></li>
                  <li><a routerLink="/form-controls/name-entry">NameEntry</a></li>
                  <li><a routerLink="/form-controls/phone-entry">PhoneEntry</a></li>
                  <li><a routerLink="/form-controls/radiobutton">Radio Button</a></li>
                  <li><a routerLink="/form-controls/searchbar">Searchbar</a></li>
                  <li><a routerLink="/form-controls/select">Select</a></li>
                  <li><a routerLink="/form-controls/text">Text</a></li>
                  <li><a routerLink="/form-controls/textarea">Textarea</a></li>
                  <li><a routerLink="/form-controls/time">Time</a></li>
                </ul>
              </li>
              <li><a routerLink="/footer">Footer</a></li>
              <li><a routerLink="/header">Header</a></li>
              <li><a routerLink="/header-links">Header Links</a></li>
              <li><a routerLink="/label">Label</a></li>
              <li><a routerLink="/modal">Modal</a></li>
              <li><a routerLink="/multiselect-dropdown">Multiselect Dropdown</a></li>
              <li><a routerLink="/pagination">Pagination</a></li>
              <li><a routerLink="/point-of-contact">Point of Contact</a></li>
              <li><a routerLink="/search-header">Search Header</a></li>
              <li><a routerLink="/sticky">Sticky</a></li>
              <li><a routerLink="/tabs">Tabs</a></li>
            </ul>
          </nav>
        </div>
        <div class="usa-width-three-fourths">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `
})
export class AppComponent implements OnInit {
  public displayFormControlSublist = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        //console.log(event.url);
        if(event.url.match(/^\/form-controls\//)){
          this.displayFormControlSublist = true;
        } else {
          this.displayFormControlSublist = false;
        }
      }
    });
  }

  public formControlClick(){
    this.displayFormControlSublist = !this.displayFormControlSublist;
  }

}
