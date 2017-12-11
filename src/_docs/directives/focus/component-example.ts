
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';
//tabs/spacing matters for code example block
var code_example = 'TODO';

@Component({
  selector: 'doc-sam-focus',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content"> + code_example + </doc-template>'
})
export class SamFocusDirectiveExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamFocusDirective";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  example = code_example;
}