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
import * as marked from 'marked';
import txt from 'raw-loader!./home/overview.md';
import { DocumentationService } from './services/documentation.service';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <sam-banner *ngIf="showBanner"></sam-banner>
    <header *ngIf="showHeader" class="usa-header site-header">
      <div class="usa-navbar site-header-navbar">
        <div class="usa-logo site-logo" id="logo">
          <em class="usa-logo-text">
            <a routerLink="/" accesskey="1" title="Home" aria-label="Home">
            SAM Web Standards</a></em>
        </div>
      </div>
    </header>
    <sam-header></sam-header>
    <!--samSearchHeader *ngIf="showUIKitSearchHeader"></samSearchHeader-->
    <main class="sticky-target-app">
      <div class="usa-grid">
        <aside class="usa-width-one-fourth">
          <nav sam-sticky [limit]="1200" [container]="'sticky-target-app'">
            <sam-sidenav [model]="sidenavConfig" (path)="resolveRoute($event)"></sam-sidenav>
          </nav>&nbsp;
        </aside>
        <div class="usa-width-three-fourths">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  providers: [DocumentationService]
})
export class AppComponent implements OnInit {

  sidenavConfig = {
      label: "test",
      children: [],
  };
  uikitList = {};
  staticpagelist = {};

  showBanner = false;
  showHeader = true;
  showUIKitHeader = false;
  showUIKitSearchHeader = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private service: DocumentationService) {}
  resolveRoute(path){
    //console.log("click",path);
    if(path == "/"){
      
    } else {
      this.router.navigate([path]);
    }
  }
  public ngOnInit() {

    var two = marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    //sidenav config setup
    //DOCS is a global defined in webpack
    //console.log(STATICPAGES);
    for(var idx in DOCS){
      if(!this.uikitList[DOCS[idx]['section']]){
        this.uikitList[DOCS[idx]['section']] = [{
          label: DOCS[idx]['item'],
          route: DOCS[idx]['link']
        }];
      } else {
        this.uikitList[DOCS[idx]['section']].push({
          label: DOCS[idx]['item'],
          route: DOCS[idx]['link']
        });
      }
      
    }
    var x = this.uikitList;
    var test = Object.keys(this.uikitList).map(function(key){
      var list = x[key];
      return {
        label: key,
        route: "/",
        children: list
      };
    });
    this.sidenavConfig['children'] = test;
    //STATICPAGES is a global defined in webpack
    for(var idx in STATICPAGES){
      if(!this.staticpagelist[STATICPAGES[idx]['section']]){
        this.staticpagelist[STATICPAGES[idx]['section']] = [{
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['link']
        }];
      } else {
        this.staticpagelist[STATICPAGES[idx]['section']].push({
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['link']
        });
      }
    }
    var x = this.staticpagelist;
    var test2 = Object.keys(this.staticpagelist).map(function(key){
      var list = x[key];
      return {
        label: key,
        route: "/",
        children: list
      };
    });
    this.sidenavConfig['children'] =  test2.concat(this.sidenavConfig['children']);
    
    //handlers for specific routes
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
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
  }
}
