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
    console.log(obj);
    this.typedoc_content += `<h2>Component API Reference</h2>
                             <table>
                              <thead>
                                <tr>
                                  <th>Tag</th>
                                  <th>Type</th>
                                  <th>Comment</th>
                                </tr>
                              </thead>`;
    obj.forEach((item) => {
      var comment = item['comment'] && item['comment']['shortText'] ? item.comment.shortText : "";
      this.typedoc_content += `<tr>
                                 <td>@${item.decorators[0].name}( ) ${item.name}</td>
                                 <td>${item.type.name}</td>
                                 <td>${comment}</td>
                               </tr>`;
    });
    this.typedoc_content += '</tbody></table>';
  }
}