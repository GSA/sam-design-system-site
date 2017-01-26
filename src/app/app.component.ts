/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DocumentationService } from './services/documentation.service';
/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <samBanner *ngIf="showBanner"></samBanner>
    <header *ngIf="showHeader" class="usa-header site-header">
      <div class="usa-navbar site-header-navbar">
        <div class="usa-logo site-logo" id="logo">
          <em class="usa-logo-text">
            <a routerLink="/" accesskey="1" title="Home" aria-label="Home">
            SAM Web Standards</a></em>
        </div>
      </div>
    </header>
    <samHeader *ngIf="showUIKitHeader"></samHeader>
    <samSearchHeader *ngIf="showUIKitSearchHeader"></samSearchHeader>
    <main>
      <div class="usa-grid">
        <div class="usa-width-one-fourth">
          <nav>
            <ul class="usa-sidenav-list">
              <li><a routerLink="/">Overview</a></li>
              <li><a (click)="formControlClick(1)">Components</a><ul class="usa-sidenav-sub_list" *ngIf="displayComponentsSublist" >
                  <li *ngFor="let uikitObj of uikitList.components"><a routerLink="{{uikitObj.link}}">{{uikitObj.item}}</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(2)">Directives</a><ul class="usa-sidenav-sub_list" *ngIf="displayDirectivesSublist" >
                  <li *ngFor="let uikitObj of uikitList.directives"><a routerLink="{{uikitObj.link}}">{{uikitObj.item}}</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(3)">Elements</a><ul class="usa-sidenav-sub_list" *ngIf="displayElementsSublist" >
                  <li *ngFor="let uikitObj of uikitList.elements"><a routerLink="{{uikitObj.link}}">{{uikitObj.item}}</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(4)">Form controls</a><ul class="usa-sidenav-sub_list" *ngIf="displayFormControlSublist" >
                  <li *ngFor="let uikitObj of uikitList['form-controls']"><a routerLink="{{uikitObj.link}}">{{uikitObj.item}}</a></li>
                </ul>
              </li>
              <li><a (click)="formControlClick(5)">Form Templates</a><ul class="usa-sidenav-sub_list" *ngIf="displayFormTemplateSublist" >
                  <li *ngFor="let uikitObj of uikitList['form-templates']"><a routerLink="{{uikitObj.link}}">{{uikitObj.item}}</a></li>
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
  `,
  providers: [DocumentationService]
})
export class AppComponent implements OnInit {
  uikitList = {};
  public displayComponentsSublist = false;
  public displayDirectivesSublist = false;
  public displayElementsSublist = false;
  public displayFormControlSublist = false;
  public displayFormTemplateSublist = false;

  showBanner = false;
  showHeader = true;
  showUIKitHeader = false;
  showUIKitSearchHeader = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private service: DocumentationService) {}

  public ngOnInit() {
    //DOCS is a global defined in webpack
    for(var idx in DOCS){
      //console.log(DOCS[idx]);
      if(!this.uikitList[DOCS[idx]['section']]){
        this.uikitList[DOCS[idx]['section']] = [DOCS[idx]];
      } else {
        this.uikitList[DOCS[idx]['section']].push(DOCS[idx]);
      }
    }
    //console.log(this.uikitList);
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

        if(event.url.match(/^\/components\/banner/)){
          this.showBanner = true;
        } else {
          this.showBanner = false;
        }
        if(event.url.match(/^\/components\/header/) || event.url.match(/^\/components\/search-header/)){
          this.showHeader = false;
          if(event.url.match(/^\/components\/header/)){
            this.showUIKitHeader = true;
          } else if(event.url.match(/^\/components\/search-header/)){
            this.showUIKitSearchHeader = true;
          }
        } else {
          this.showUIKitHeader = false;
          this.showHeader = true;
          this.showUIKitSearchHeader = false;
        }
      }
    });
    let sampleComponent = null;
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
