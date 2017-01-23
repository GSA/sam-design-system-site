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
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/////COMP
@Component({
  selector: 'doc-base-example',
  template: `<h1>overwrite me</h1>`
})
export class BaseExampleComponent implements OnInit {
  typedoc_target = "";
  typedoc_content = "";
  markdown = "";
  example = ``;
  constructor(private _http: Http){}
  public ngOnInit() {
    var typedoc_target = this.typedoc_target;
    this._http.get("./docs.json").map((res)=>res.json()).subscribe(res =>{
      var component = res.children.filter(function(val){
        if(val['name'].includes(typedoc_target)){
          return true;
        }
      })[0];
      //console.log(component);
      this.setupTypedocContent(component);
    })
  }
  public setupTypedocContent(obj){
    if(obj && obj['children'] 
      && obj['children'][0]['comment'] 
      && obj['children'][0]['comment']['tags']
      && obj['children'][0]['comment']['tags'].length > 0){
      console.log("tags?",obj['children'][0]['comment']['tags']);
      var accordionWrapperDecorators = obj['children'][0]['comment']['tags'];
      this.typedoc_content += `<h2>Component Reference</h2><table><tr><th>Tag</th><th>Comment</th></tr>`;
      for(var idx in accordionWrapperDecorators){
        var decorator = accordionWrapperDecorators[idx];
        this.typedoc_content += `<tr><td>@`+ decorator.tag +`</td><td>` + decorator.text + `</td></tr>`;
      }
      this.typedoc_content += `</table>`;
      //this.typedoc_content = ``;
    }
  }
}