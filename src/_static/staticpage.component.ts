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
export class StaticPageComponent {
  content = `<h1>No Documentation Yet</h1><p>Coming soon</p>`;
  constructor(private route: ActivatedRoute,private router: Router,private _http: Http){}
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
    this.route
      .data
      .subscribe(v => {
        this._http.get(v['markdownfile']).map((res)=>{
          return res.text();
        }).subscribe(res =>{
          this.content = mk(res);
        })
    });
  }
}