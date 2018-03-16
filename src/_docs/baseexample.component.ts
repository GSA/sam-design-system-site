import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef
} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentationService } from '../app/services/documentation.service';
import { MarkdownService } from '../app/services/markdown/markdown.service';

@Component({
  selector: 'doc-base-example',
  template: `<h1>overwrite me</h1>`
})
export class BaseExampleComponent implements OnInit {
  public typedoc_target: string = '';
  public typedoc_content: string = '';
  public markdown: string = '';
  public guidance: string = '';
  public example: string = '';

  public sections = [
    'markdown',
    'design',
    'guidance',
    'implementation'
  ];

  public base;

  constructor(
    private _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {}

  public ngOnInit(): void {
    this.service.getComponentProperties(this.typedoc_target)
    .subscribe(
      (data) => { this.setupTypedocContent(data); },
      (error) => { throw new Error(error); }
    );
  }

  public setupTypedocContent(obj: any): void {
    this.typedoc_content += `
      <h2 class="sam-ui header">API Reference</h2>
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
<<<<<<< HEAD
      this.typedoc_content += `
        <tr>
          <td>@${item.decorators[0].name}( ) ${item.name}</td>
          <td>${type}</td>
          <td>${comment}</td>
        </tr>`;
=======
      let deprecated;
      if (item.comment && item.comment.tags) {
        let depItems = item.comment.tags.filter(
          tag => tag.tag === 'deprecated'
        );
        deprecated = depItems.length > 0 ? true : false;
      }
      this.typedoc_content += `
        <tr>
          <td>
          ${deprecated
            ? '<em><i class="fa fa-thumbs-down"></i>&nbsp;Deprecated</em><br>'
            : ''}
          @${item.decorators[0].name}( ) ${item.name}
        </td>
          <td>${type}</td>
          <td>${comment}</td>
        </tr>
      `;
>>>>>>> develop
    });
    this.typedoc_content += '</tbody></table>';
  }

  public fetchSection (section: string) {

    let fileName = section === 'markdown'
      ? 'documentation'
      : section;

    return this.mdService
      .get(`${this.base}${fileName}.md`)
      .subscribe(
        (data: any) => {
          this[section] = data.text();
        },
        (err) => {
          this[section] = '';
        }
      );
  }

}
