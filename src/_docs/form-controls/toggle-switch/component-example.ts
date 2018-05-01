import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-third">
    <sam-toggle-switch [isSwitchOn]="true"></sam-toggle-switch>
  </div>
</div>`;

@Component({
  selector: 'doc-toggle-switch',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class ToggleSwitchExampleComponent extends BaseExampleComponent implements OnInit {

  typedoc_target = 'SamToggleSwitchComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-controls/toggle-switch/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
