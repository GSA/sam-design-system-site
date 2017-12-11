
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
import { markdownLoader } from '../../../markdown-loader';
//tabs/spacing matters for code example block
var code_example = `
<sam-action-button [action]="action"></sam-action-button>

<sam-action-button [action]="action"
[disabled]="true"></sam-action-button>
`;

@Component({
  selector: 'doc-sam-action-button',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamActionButtonExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamActionButton";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  example = code_example;
  action = { name: 'edit', label: 'Edit', icon: 'fa fa-pencil', callback: ()=>{console.log("click");}}
}