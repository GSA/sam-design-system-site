
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
var code_example = `
<sam-image name="urmom"
class="usa-width-one"
src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg"
(fileChange)="fileChangeHandler($event)"
[editable]="true"></sam-image>`;

@Component({
  selector: 'doc-sam-image',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamImageComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamImageComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
  example = code_example;
  fileChangeHandler(event)  {
    console.log(event);
  }
}