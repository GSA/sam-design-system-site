
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
var code_example = `<sam-fieldset-wrapper label="Fieldset Label Example" hint="Hint text goes here">
  <sam-text label="Field #1" name="field1"></sam-text>
  <sam-text label="Field #2" name="field2"></sam-text>
</sam-fieldset-wrapper>`;

@Component({
  selector: 'doc-sam-fieldset-wrapper',
  template: `<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">` + code_example + `</doc-template>`
})
export class FieldsetWrapperExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "FieldsetWrapper";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example;
}