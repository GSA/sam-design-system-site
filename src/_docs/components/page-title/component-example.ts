/* tslint:disable */
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
const code_example = `<sam-page-title
  title="My Saved Report Criteria"
  super="Federal Assistance Compliance Summary">
  Additional extra content here
</sam-page-title>`;

@Component({
  selector: 'doc-sam-page-title',
  template:
    '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' +
    code_example +
    '</doc-template>',
})
export class SamPageTitleExampleComponent extends BaseExampleComponent
  implements OnInit {
  typedoc_target = 'SamPageTitle';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/page-title/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService
  ) {
    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
