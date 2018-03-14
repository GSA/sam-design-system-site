
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

//tabs/spacing matters for code example block
var code_example = `
<sam-breadcrumbs [crumbs]="crumbs"></sam-breadcrumbs>
`;
@Component({
  selector: 'doc-sam-breadcrumbs',
  template: `<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">${code_example}</doc-template>`
})
export class SamBreadcrumbsComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamBreadcrumbsComponent";
  typedoc_content = "";

  example = code_example;

  crumbs = [
    { breadcrumb: 'Back to my workspace', url: '/workspace' },
    { breadcrumb: '...'}
  ];

  public base = '_docs/components/breadcrumbs/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
