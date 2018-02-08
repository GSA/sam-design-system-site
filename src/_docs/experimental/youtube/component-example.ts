
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

      <code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </code-example>

    </doc-template>`
})
export class SamYoutubeComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamYoutubeComponent";
  typedoc_content = "";

  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  
	example_1 = code_example_1.trim();
}