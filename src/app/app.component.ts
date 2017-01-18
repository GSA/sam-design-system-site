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
              <li><a (click)="formControlClick(1)">Components</a><ul class="usa-sidenav-sub_list" *ngIf="displayComponentsSublist" >
                  <li><a routerLink="/components/accordion">Accordions</a></li>
                  <li><a routerLink="/components/alerts">Alerts</a></li>
                  <li><a routerLink="/components/banner">Banner</a></li>
                  <li><a routerLink="/components/footer">Footer</a></li>
                  <li><a routerLink="/components/header">Header</a></li>
                  <li><a routerLink="/components/label">Label</a></li>
                  <li><a routerLink="/components/modal">Modal</a></li>
                  <li><a routerLink="/components/multiselect-dropdown">Multiselect Dropdown</a></li>
                  <li><a routerLink="/components/pagination">Pagination</a></li>
                  <li><a routerLink="/components/point-of-contact">Point of Contact</a></li>
                  <li><a routerLink="/components/search-header">Search Header</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(2)">Directives</a><ul class="usa-sidenav-sub_list" *ngIf="displayDirectivesSublist" >
                  <li><a routerLink="/directives/click-outside">Click Outside</a></li>
                  <li><a routerLink="/directives/sticky">Sticky</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(3)">Elements</a><ul class="usa-sidenav-sub_list" *ngIf="displayElementsSublist" >
                  <li><a routerLink="/elements/button">Button</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(4)">Form controls</a><ul class="usa-sidenav-sub_list" *ngIf="displayFormControlSublist" >
                  <li><a routerLink="/form-controls/checkbox">Checkbox</a></li>
                  <li><a routerLink="/form-controls/date">Date</a></li>
                  <li><a routerLink="/form-controls/date-time">DateTime</a></li>
                  <li><a routerLink="/form-controls/multiselect">Multiselect</a></li>
                  <li><a routerLink="/form-controls/radiobutton">Radio Button</a></li>
                  <li><a routerLink="/form-controls/searchbar">Searchbar</a></li>
                  <li><a routerLink="/form-controls/select">Select</a></li>
                  <li><a routerLink="/form-controls/text">Text</a></li>
                  <li><a routerLink="/form-controls/textarea">Textarea</a></li>
                  <li><a routerLink="/form-controls/time">Time</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(5)">Form Templates</a><ul class="usa-sidenav-sub_list" *ngIf="displayFormTemplateSublist" >
                  <li><a routerLink="/form-templates/name-entry">NameEntry</a></li>
                  <li><a routerLink="/form-templates/phone-entry">PhoneEntry</a></li>
                </ul>
              </li>
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
  public displayComponentsSublist = false;
  public displayDirectivesSublist = false;
  public displayElementsSublist = false;
  public displayFormControlSublist = false;
  public displayFormTemplateSublist = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        //console.log(event.url);
        if(event.url.match(/^\/components\//)){
          this.displayComponentsSublist = true;
        } else {
          this.displayComponentsSublist = false;
        }
        if(event.url.match(/^\/directives\//)){
          this.displayDirectivesSublist = true;
        } else {
          this.displayDirectivesSublist = false;
        }
        if(event.url.match(/^\/elements\//)){
          this.displayElementsSublist = true;
        } else {
          this.displayElementsSublist = false;
        }
        if(event.url.match(/^\/form-controls\//)){
          this.displayFormControlSublist = true;
        } else {
          this.displayFormControlSublist = false;
        }
        if(event.url.match(/^\/form-templates\//)){
          this.displayFormTemplateSublist = true;
        } else {
          this.displayFormTemplateSublist = false;
        }
      }
    });
  }

  public formControlClick(val){
    if(val==1){
      this.displayComponentsSublist = true;
    } else {
      this.displayComponentsSublist = false;
    }
    if(val==2){
      this.displayDirectivesSublist = true;
    } else {
      this.displayDirectivesSublist = false;
    }
    if(val==3){
      this.displayElementsSublist = true;
    } else {
      this.displayElementsSublist = false;
    }
    if(val==4){
      this.displayFormControlSublist = true;
    } else {
      this.displayFormControlSublist = false;
    }
    if(val==5){
      this.displayFormTemplateSublist = true;
    } else {
      this.displayFormTemplateSublist = false;
    }
  }

}
