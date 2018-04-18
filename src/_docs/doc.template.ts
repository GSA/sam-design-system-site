import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import Prism from 'prismjs';

import { environment } from 'environment';
const DOCS = environment.DOCS;
const STATICPAGES = environment.STATICPAGES;

@Component({
	selector: 'doc-template',
  templateUrl: 'doc.template.html'
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
      label: 'Documentation Sidenav',
      children: [],
  };

  constructor(private router: Router){}

  resolveRoute(path){
    if (path == '/'){
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

    const uikitList = {};

    // Organize by section
    for (const idx in DOCS){
      if (!uikitList[DOCS[idx]['section']]){
        uikitList[DOCS[idx]['section']] = [{
          label: DOCS[idx]['item'],
          route: DOCS[idx]['routerlink']
        }];
      } else {
        uikitList[DOCS[idx]['section']].push({
          label: DOCS[idx]['item'],
          route: DOCS[idx]['routerlink']
        });
      }
    }

    // Prepare data so it can be consumed by <sam-sidenav>
    const docsNav = uikitList;
    const docsNavContent = Object.keys(uikitList).map( section => {
      const sectionChildren = docsNav[section];
      return {
        label: section,
        route: '/',
        children: sectionChildren
      };
    });

    // Update <sam-sidenav> model
    this.sidenavConfig['children'] = docsNavContent;


    // ----------------------------------------------------------
    // Static Pages links
    // ----------------------------------------------------------

    //STATICPAGES is a global defined in webpack

    const staticpagelist = {};

    // Organize by section
    for (const idx in STATICPAGES){
      if (!staticpagelist[STATICPAGES[idx]['section']]){
        staticpagelist[STATICPAGES[idx]['section']] = [{
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['routerlink']
        }];
      } else {
        staticpagelist[STATICPAGES[idx]['section']].push({
          label: STATICPAGES[idx]['item'],
          route: STATICPAGES[idx]['routerlink']
        });
      }
    }

    // Prepare data so it can be consumed by <sam-sidenav>
    const docsNavStaticPages = staticpagelist;
    const docsNavStaticPagesContent = Object.keys(staticpagelist).map( section => {
      const list = docsNavStaticPages[section];
      return {
        label: section,
        route: '/',
        children: list
      };
    });

    // Sort by alphabetical order
    // Move Overview to the top of the list
    docsNavStaticPagesContent.sort(function(a, b){
      if (a.label == 'Overview'){
        return -1;
      } else if (b.label == 'Overview'){
        return 1;
      }
      if ( a.label.charAt(0).toLowerCase() < b.label.charAt(0).toLowerCase() ){
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
