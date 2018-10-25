
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

import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
const code_example = `TODO`;

@Component({
  selector: 'doc-sam-master-page',
  template: `
    <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

     <div class="sam-ui warning message">
        <div class="header">
          Warning
        </div>
        <p>
          This component is under development.
        </p>
      </div>

      <p>
        Component that serves as a container for the page component(<em>sam-page</em>).
        It is responsable for main site navigation and global UI services.
      </p>

    </doc-template>`
})
export class SamMasterPageComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamMasterPageComponent';
  typedoc_content = ' ';

  example = code_example;

  public base = '_docs/experimental/master-page/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
