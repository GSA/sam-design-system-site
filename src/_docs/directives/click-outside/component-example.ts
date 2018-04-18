import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<button sam-click-outside (click)="clickInsideHandler()" (clickOutside)="clickOutsideHandler()">Sample Target</button>`;

@Component({
	selector: 'doc-click-outside',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<p>Click value: {{clickedValue}}</p>
` + code_example + `
</doc-template>
`
})
export class ClickOutsideExampleComponent extends BaseExampleComponent implements OnInit {
	clickedValue = 'None';
	typedoc_target = 'SamClickOutsideDirective';
  typedoc_content = '';

	example = code_example;

  public base = '_docs/directives/click-outside/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  public clickOutsideHandler() {
    this.clickedValue = 'Clicked outside \'Sample Target\'';
  }

  public clickInsideHandler() {
    this.clickedValue = 'Clicked inside \'Sample Target\'';
  }
}
