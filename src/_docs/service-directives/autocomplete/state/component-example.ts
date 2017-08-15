
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

//tabs/spacing matters for code example block
var code_example = 'TODO';

@Component({
  selector: 'doc-sam-autocomplete',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content"> + code_example + </doc-template>'
})
export class StateServiceDirectiveExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "StateServiceDirective";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
  example = code_example;
}