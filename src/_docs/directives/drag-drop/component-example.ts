
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
<p>Drop a file into the area below</p>
<div 
  style="width:50px;height:50px;border:1px solid #000;"
  sam-drag-drop (dropEvent)="handleDrop($event)"></div>
<p>{{detectionText}}</p>`;

@Component({
  selector: 'doc-sam-drag-drop',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">' + code_example + '</doc-template>'
})
export class SamDragDropDirectiveExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamDragDropDirective';
  typedoc_content = '';

  example = code_example;
  detectionText = "";


  public base = '_docs/directives/drag-drop/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  handleDrop(data){
    this.detectionText = "Detected an item drop";
  }
}
