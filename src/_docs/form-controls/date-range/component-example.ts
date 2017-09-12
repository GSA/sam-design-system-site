
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
<sam-date-range 
  name="example-date" 
  #dateRangeVar="ngModel" 
  [control]="dateRangeVar.control" 
  [(ngModel)]='dateRangeModel'></sam-date-range>`;

@Component({
  selector: 'doc-sam-date-range',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamDateRangeComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamDateRangeComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
  example = code_example;
  dateRangeModel = {
    startDate: "2016-02-03",
    endDate: "2017-04-23"
  };
}