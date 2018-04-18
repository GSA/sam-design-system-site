
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

const code_example_1 = `
<sam-icon name="home"></sam-icon>
<sam-icon name="user"></sam-icon>
<sam-icon name="search"></sam-icon>
<sam-icon name="cog"></sam-icon>
<sam-icon name="video"></sam-icon>
<sam-icon name="comment"></sam-icon>
<sam-icon name="newspaper"></sam-icon>
<sam-icon name="book"></sam-icon>
`;

const code_example_2 = `
<sam-icon name="user"></sam-icon>
`;

const code_example_3 = `
<sam-icon name="search"></sam-icon>
`;

@Component({
	selector: 'doc-sam-icon',
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

      <h3 class="sam-ui dividing header">Available</h3>

      <code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </code-example>

    </doc-template>`
})
export class SamIconComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamIconComponent';
  typedoc_content = '';

	example_1 = code_example_1.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();


  public base = '_docs/experimental/icon/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
