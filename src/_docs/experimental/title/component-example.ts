import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
const code_example = `TODO`;

@Component({
  selector: 'doc-sam-title',
  template:
    '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' +
    code_example +
    '</doc-template>',
})
export class SamTitleComponentExampleComponent extends BaseExampleComponent
  implements OnInit {
  typedoc_target = 'SamTitleComponent';
  typedoc_content = '';

  example = code_example;

  public base = 'ADD_BASE_URL';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService
  ) {
    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
