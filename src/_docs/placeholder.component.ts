import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as marked from 'marked';

/////COMP
@Component({
  selector: 'doc-placeholder-example',
  template: `<div [innerHtml]="content"></div>`
})
export class PlaceHolderExampleComponent {
  content = `<h1>No Documentation Yet</h1><p>Coming soon</p>`;
  constructor(private router: Router,private _http: Http){}
  ngOnInit(){
    var mk = marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        this._http.get("/src/_docs/"+event.url+"/documentation.md").map((res)=>{
          return res.text();
        }).subscribe(res =>{
          this.content = mk(res);
        })
      }
    });
  }
}