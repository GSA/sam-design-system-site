
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
const code_example = `
<div style='width:400px; height:400px; border:3px dotted black; position:relative;'>
  <sam-badge [options]="{attached:'top-right'}">hello</sam-badge>
</div>`;

@Component({
  selector: 'doc-sam-badge',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamBadgeComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamBadgeComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/badge/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
