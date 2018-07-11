
/* tslint:disable */
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
const code_example = `
<sam-dollar
  [(ngModel)]="dollarVal"
  label="Dollar component prototype"
  [id]="'dollar'"></sam-dollar>
<p>{{dollarVal}}</p>`;

@Component({
  selector: 'doc-sam-dollar',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamDollarComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamDollarComponent';
  typedoc_content = '';

  example = code_example;
  dollarVal = "$12.12";

  public base = '_docs/experimental/dollar/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}

