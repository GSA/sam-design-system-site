
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

//tabs/spacing matters for code example block
var code_example = `TODO`;

@Component({
	selector: 'doc-sam-upload',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">'+ code_example +'</doc-template>'
})
export class SamUploadComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamUploadComponent";
  typedoc_content = "";

  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  
	example = code_example;
}