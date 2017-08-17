
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
import { BaseExampleComponent } from '../../../baseexample.component';

//tabs/spacing matters for code example block
var code_example = 'TODO';

@Component({
  selector: 'doc-sam-action-button',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content"> + code_example + </doc-template>'
})
export class SamActionButtonExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamActionButton";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
  example = code_example;
}