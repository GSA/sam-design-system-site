
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

// tabs/spacing matters for code example block
var code_example = `
<sam-input-mask
  [disabled]="disabled"
  [attr.id]="name"
  [template]="'__/__/____'"
  [maxlength]="10"
  [placeholder]="placeholder"
  [disableFocusBehavior]="true"
  [(ngModel)]="inputValue">
</sam-input-mask>
<p>
{{inputValue}}
</p>`;

@Component({
  selector: 'doc-sam-input-mask',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamInputMaskComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamInputMaskComponent";
  typedoc_content = "";
  
  example = code_example;
  disabled = false;
  name = 'example';
  placeholder = 'mm/dd/yyyy';
  inputValue = '';
  
  public base = '_docs/experimental/input-mask/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}

