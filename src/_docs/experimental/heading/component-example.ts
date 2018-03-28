
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

var code_example_1 = `
<sam-title importance="highest" text="Lorem Ipsum Dolor"></sam-title>
`;

var code_example_2 = `
<sam-title importance="high" text="Lorem Ipsum Dolor"></sam-title>
`;

var code_example_3 = `
<sam-title importance="normal" text="Lorem Ipsum Dolor"></sam-title>
`;

var code_example_4 = `
<sam-title importance="low" text="Lorem Ipsum Dolor"></sam-title>
`;

var code_example_5 = `
<sam-title importance="highest" sup="Sit amet" text="Lorem Ipsum Dolor"></sam-title>
`;

var code_example_6 = `
<sam-title importance="low" icon="user" text="Lorem Ipsum Dolor"></sam-title>
`;

@Component({
	selector: 'doc-sam-heading',
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

      <h2 class="sam-ui header">Importance</h2>

      <code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </code-example>

      <code-example language="html" [code]="example_2">
      ` + code_example_2 + `
      </code-example>

      <code-example language="html" [code]="example_3">
      ` + code_example_3 + `
      </code-example>

      <code-example language="html" [code]="example_4">
      ` + code_example_4 + `
      </code-example>

      <h2 class="sam-ui header">Sup Heading</h2>

      <div class="sam-ui info message">
        <div class="header">
          Availability:
        </div>
        <p>
          This option its <strong>only</strong> available for highest importance 
          headings 
        </p>
      </div>

      <code-example language="html" [code]="example_5">
      ` + code_example_5 + `
      </code-example>

      <h2 class="sam-ui header">Icons</h2>

      <code-example language="html" [code]="example_6">
      ` + code_example_6 + `
      </code-example>

    </doc-template>`
})
export class SamHeadingComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamHeadingComponent";
  typedoc_content = "";
  
  example_1 = code_example_1.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  example_4 = code_example_4.trim();
  example_5 = code_example_5.trim();
  example_6 = code_example_6.trim();

    
        
  public base = '_docs/experimental/heading/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}