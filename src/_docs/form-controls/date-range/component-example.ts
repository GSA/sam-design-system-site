
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
var code_example = `
<sam-date-range 
  label="Default"
  name="example-date" 
  #dateRangeVar="ngModel" 
  [control]="dateRangeVar.control" 
  [(ngModel)]='dateRangeModel'></sam-date-range>
<hr />
<sam-date-range 
  label="Stacked"
  name="example-date" 
  #dateRangeVar2="ngModel" 
  [control]="dateRangeVar2.control" 
  stacked="true"
  [(ngModel)]='dateRangeModel2'></sam-date-range>`;

@Component({
  selector: 'doc-sam-date-range',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamDateRangeComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamDateRangeComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
  example = code_example;
  dateRangeModel = {
    startDate: "2016-02-03",
    endDate: "2017-04-23"
  };
  dateRangeModel2 = {
    startDate: "2016-02-03",
    endDate: "2017-04-23"
  };
}