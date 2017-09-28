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
import * as marked from 'markdown-it';

/////COMP
@Component({
  selector: 'doc-placeholder-example',
  template: `<div [innerHtml]="content"></div>`
})
export class PlaceHolderExampleComponent {
  content = `<h1>No Documentation Yet</h1><p>Coming soon</p>`;
  constructor(private router: Router,private _http: Http){}
  ngOnInit(){
    var mk = marked({
      html: true,
    });
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        this._http.get("/src/_docs/"+event.url+"/documentation.md").map((res)=>{
          return res.text();
        }).subscribe(res =>{
          this.content = mk.render(res);
        })
      }
    });
  }
}