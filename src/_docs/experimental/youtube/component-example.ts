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

const code_example_1 = `
<sam-youtube id="5uciZ431AGo"></sam-youtube>
`;

@Component({
  selector: 'doc-sam-youtube',
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

      <sam-code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </sam-code-example>

    </doc-template>`
})
export class SamYoutubeComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamYoutubeComponent';
  typedoc_content = '';

  example_1 = code_example_1.trim();

  public base = '_docs/experimental/youtube/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
