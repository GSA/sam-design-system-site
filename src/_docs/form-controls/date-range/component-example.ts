
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

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

// tabs/spacing matters for code example block
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
  public typedoc_target = 'SamDateRangeComponent';
  public typedoc_content = '';

  public example = code_example;
  public dateRangeModel = {
    startDate: '2016-02-03',
    endDate: '2017-04-23'
  };
  public dateRangeModel2 = {
    startDate: '2016-02-03',
    endDate: '2017-04-23'
  };

  public base = '_docs/form-controls/date-range/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
