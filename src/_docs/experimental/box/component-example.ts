
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
import { markdownLoader } from '../../markdown-loader';


var code_example_1 = `
<sam-box>Lorem Ipsum</sam-box>
`;

var code_example_2 = `
<sam-box type="primary">Lorem Ipsum</sam-box>
`;

var code_example_3 = `
<sam-box type="outline">Lorem Ipsum</sam-box>
`;

@Component({
	selector: 'doc-sam-box',
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

      <h2 class="sam-ui header">Types</h2>

      <h3 class="sam-ui dividing header">Default</h3>

      <code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </code-example>

      <h3 class="sam-ui dividing header">Primary</h3>

      <code-example language="html" [code]="example_2">
      ` + code_example_2 + `
      </code-example>

      <h3 class="sam-ui dividing header">Outline</h3>

      <code-example language="html" [code]="example_3">
      ` + code_example_3 + `
      </code-example>

    </doc-template>`
})
export class SamBoxComponentExampleComponent extends BaseExampleComponent implements OnInit {

  typedoc_target = "SamBoxComponent";
  typedoc_content = "";

  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  
  example_1 = code_example_1.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  
}