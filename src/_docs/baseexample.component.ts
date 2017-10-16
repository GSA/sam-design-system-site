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
import { DocumentationService } from '../app/services/documentation.service';

/////COMP
@Component({
  selector: 'doc-base-example',
  template: `<h1>overwrite me</h1>`
})
export class BaseExampleComponent implements OnInit {
  typedoc_target: string = '';
  typedoc_content: string = '';
  markdown: string = '';
  guidance: string = '';
  example: string = '';
  constructor(private _http: Http, private service: DocumentationService){}

  public ngOnInit(): void {
    this.service.getComponentProperties(this.typedoc_target)
    .subscribe(
      (data) => { this.setupTypedocContent(data); },
      (error) => { throw new Error(error); }
    );
  }

  public setupTypedocContent(obj: any): void {
    this.typedoc_content += `<h2 class="sam-ui header">API Reference</h2>
                             <table class="sam-ui definition celled table">
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Type</th>
                                  <th>Comment</th>
                                </tr>
                              </thead>`;
    obj.forEach((item) => {
      var comment = item['comment'] && item['comment']['shortText'] ? item.comment.shortText : "";
      var type = item['type'] && item['type']['name'] ? item.type.name : "";
      this.typedoc_content += `<tr>
                                 <td>@${item.decorators[0].name}( ) ${item.name}</td>
                                 <td>${type}</td>
                                 <td>${comment}</td>
                               </tr>`;
    });
    this.typedoc_content += '</tbody></table>';
  }
}