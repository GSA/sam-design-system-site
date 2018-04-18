
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
const code_example = `
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
  typedoc_target = 'SamImageComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/components/image/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  public fileChangeHandler(event)  {
    console.log(event);
  }
}
