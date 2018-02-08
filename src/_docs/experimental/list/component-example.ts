
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
<sam-list [items]="listData"></sam-list>
`;

var code_example_2 = `
<sam-list [items]="listLinkData"></sam-list>
`;

var code_example_3 = `
<sam-list [items]="listIconData"></sam-list>
`;

@Component({
	selector: 'doc-sam-list',
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

      <h3 class="sam-ui dividing header">Text</h3>

      <code-example language="html" [code]="example_1">
      ` + code_example_1 + `
      </code-example>

      <h3 class="sam-ui dividing header">Link</h3>

      <code-example language="html" [code]="example_2">
      ` + code_example_2 + `
      </code-example>

      <h3 class="sam-ui dividing header">Icon</h3>

      <code-example language="html" [code]="example_3">
      ` + code_example_3 + `
      </code-example>

    </doc-template>`
})
export class SamListComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamListComponent";
  typedoc_content = "";

  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);

  listData = [
    {
      "text": "Orci varius natoque"
    },
    {
      "text": "Vivamus ac est eget ipsum"
    }
  ]

  listLinkData = [
    {
      "link": "#",
      "text": "Orci varius natoque"
    },
    {
      "link": "#",
      "text": "Vivamus ac est eget ipsum"
    }
  ]

  listIconData = [
    {
      "icon": "user",
      "link": "#",
      "text": "Orci varius natoque"
    },
    {
      "icon": "book",
      "link": "#",
      "text": "Vivamus ac est eget ipsum"
    }
  ]
  
	example_1 = code_example_1.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
}