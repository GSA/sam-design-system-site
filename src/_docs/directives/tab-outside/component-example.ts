import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<input sam-tab-outside (tabOutside)="tabHandler($event)" /> 
<p>{{ tabAway }}</p>
<button (click)="reset()">reset</button>`;

@Component({
	selector: 'doc-taboutside',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class TabOutsideExampleComponent extends BaseExampleComponent {
  public typedoc_target = 'SamTabOutsideDirective';
  public typedoc_content = '';

  public example = code_example;

  public tabAway = 'not tabbed away';

  public base = '_docs/directives/tab-outside/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  public tabHandler(evt) {
    this.tabAway = 'tabbed away';
  }
  public reset() {
    this.tabAway = 'not tabbed away';
  }

}
