import {
  Component,
  OnInit,
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
  public codeExample: string = '';
  public design: string = '';

  public sections = [
    'markdown',
    'design',
    'guidance',
    'implementation'
  ];

  public base;

  constructor(
    public http: Http,
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
    if (!obj || obj.length === 0) {
      return;
    }
    this.typedoc_content += `
      <h2 class="sam heading">API Reference</h2>
      <table class="sam-ui definition celled table">
      <thead>
        <tr>
          <th></th>
          <th>Type</th>
          <th>Comment</th>
        </tr>
      </thead>`;
    obj.forEach((item) => {
      const comment = item['comment'] && item['comment']['shortText'] ? item.comment.shortText : '';
      const type = item['type'] && item['type']['name'] ? item.type.name : '';
      let deprecated;
      if (item.comment && item.comment.tags) {
        const depItems = item.comment.tags.filter(
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
    });
    this.typedoc_content += '</tbody></table>';
  }

  public fetchSection (section: string) {

    const fileName = section === 'markdown'
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
