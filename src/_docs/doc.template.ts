import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Router } from '@angular/router';

import Prism from 'prismjs';

@Component({
	selector: 'doc-template',
  template: `
  <header class="site-header">
    <nav class="site-nav">
      <div class="container">
        <a class="home" [routerLink]="['/']">
          SAM Web Design Standards
        </a>
        <div class="mask-container">
          <ul>
            <li>
              <a [routerLink]="['/examples']">Examples</a>
            </li>
            <li>
              <a [routerLink]="['/overview/getting-started']">Documentation</a>
            </li>
          </ul>
        </div>
        <div class="separator"></div>
      </div>
    </nav>
  </header>
  <div class="usa-grid">
    <aside class="usa-width-one-fourth">
      <sam-sidenav [model]="sidenavConfig" (path)="resolveRoute($event)"></sam-sidenav>
    </aside>
    <div class="usa-width-three-fourths">
      
      
      <sam-tabs *ngIf="typedoc">
        <sam-tab tabTitle="Documentation" active="true">
          <div class="doc-intro" [innerHTML]="markdown"></div>
          <ng-content></ng-content>
          <pre *ngIf="example" class="language-html"><code class="language-html" [innerHTML]="example"></code></pre>
          
          <div class="sam-ui hidden section divider"></div>
          
          <div *ngIf="typedoc !== 'static-page'" [innerHTML]="typedoc"></div>
        </sam-tab>
        <sam-tab tabTitle="Guidance" *ngIf="guidance">
          <div [innerHTML]="guidance"></div>
        </sam-tab>
        <sam-tab tabTitle="Design" *ngIf="design">
          <div [innerHTML]="design"></div>
        </sam-tab>
        <sam-tab tabTitle="Implementation" *ngIf="implementation">
          <div [innerHTML]="implementation"></div>
        </sam-tab>
      </sam-tabs>
    </div>
  </div>
  
  <div class="sam-ui hidden section divider"></div>

  <footer class="site-footer">
    <nav class="container">
      <ul>
        <li>
          <a [routerLink]="['overview/getting-started']">
            Documentation
          </a>
        </li>
        <li>
          <a [routerLink]="['/examples']">
            Examples
          </a>
        </li>
        <li>
          <a href="https://github.helix.gsa.gov/GSA-IAE-APPS/sam-ui-elements">
            SAM-UI Elements
          </a>
        </li>
        <li>
          <a href="https://github.helix.gsa.gov/GSA-IAE-APPS/web-standards-site">
            SAM Web Design Standards
          </a>
        </li>
      </ul>
    </nav>
  </footer>
`
})
export class DocTemplateComponent implements OnInit {
  
	@Input() markdown;
	@Input() example;
	@Input() typedoc;
	@Input() guidance;
	@Input() design;
	@Input() implementation;
  
  tabSelected = true;
  panelSelected = true;
  
  sidenavConfig = {
      label: "Documentation Sidenav",
      children: [],
  };
  
  constructor(private router: Router){}
  
  resolveRoute(path){
    if(path == "/"){
    } else {
      this.router.navigate([path]);
    }
  }
  
	public ngOnInit() {
    
    // ==========================================================
    // SIDE NAVIGATION CONFIG SETUP
    // ==========================================================
    
    // ---------------------------------------------------------- 
    // UI-Kit links
    // ----------------------------------------------------------
    
    //DOCS is a global defined in webpack
    
    var uikitList = {};
    
    // Organize by section
    for(var idx in DOCS){
      if(!uikitList[DOCS[idx]['section']]){
        uikitList[DOCS[idx]['section']] = [{
          label: DOCS[idx]['item'],
          route: DOCS[idx]['link']
        }];
      } else {
        uikitList[DOCS[idx]['section']].push({
          label: DOCS[idx]['item'],
          route: DOCS[idx]['link']
        });
      }
    }
    
    // Prepare data so it can be consumed by <sam-sidenav> 
    var docsNav = uikitList;
    var docsNavContent = Object.keys(uikitList).map( section => {
      var sectionChildren = docsNav[section];
      return {
        label: section,
        route: "/",
        children: sectionChildren
      };
    });
    
    // Update <sam-sidenav> model
    this.sidenavConfig['children'] = docsNavContent;
    
    
    // ----------------------------------------------------------
    // Static Pages links
    // ----------------------------------------------------------
    
    //STATICPAGES is a global defined in webpack
    
    var staticpagelist = {};
    
    // Organize by section
    for(var idx in STATICPAGES){
      if(!staticpagelist[STATICPAGES[idx]['section']]){
        staticpagelist[STATICPAGES[idx]['section']] = [{
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['link']
        }];
      } else {
        staticpagelist[STATICPAGES[idx]['section']].push({
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['link']
        });
      }
    }
    
    // Prepare data so it can be consumed by <sam-sidenav> 
    var docsNavStaticPages = staticpagelist;
    var docsNavStaticPagesContent = Object.keys(staticpagelist).map( section => {
      var list = docsNavStaticPages[section];
      return {
        label: section,
        route: "/",
        children: list
      };
    });
    
    // Sort by alphabetical order
    // Move Overview to the top of the list
    docsNavStaticPagesContent.sort(function(a,b){
      if(a.label=="Overview"){
        return -1;
      } else if (b.label=="Overview"){
        return 1;
      }
      if( a.label.charAt(0).toLowerCase() < b.label.charAt(0).toLowerCase() ){
        return -1;
      } else if ( a.label.charAt(0).toLowerCase() > b.label.charAt(0).toLowerCase() ) {
        return 1;
      }
      return 0;
    });
    
    // Update <sam-sidenav> model
    this.sidenavConfig['children'] = docsNavStaticPagesContent.concat(this.sidenavConfig['children']);
    
    
    // ==========================================================
    // Run Prism JS
    // ==========================================================
    if (this.example) {
      this.example = Prism.highlight(this.example, Prism.languages.html);  
    }
    
  }
  
}