
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

//tabs/spacing matters for code example block
const code_example = `TODO`;

@Component({
	selector: 'doc-sam-sidebar',
  template: `
    <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

     <div class="sam-ui warning message">
        <div class="header">
          Warning
        </div>
        <p>
          This component is under development.
        </p>
      </div>

      <p>
        Examples found in <a [routerLink]="['/patterns/latest/home']">Patterns</a>
        section.
      </p>

    </doc-template>`
})
export class SamSidebarComponentExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamSidebarComponent';
  typedoc_content = '';

	example = code_example;

  public base = '_docs/experimental/sidebar/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
