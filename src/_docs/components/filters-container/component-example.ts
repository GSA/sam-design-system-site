import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<sam-filters-container>
  <sam-collapsible [label]="'Test 1'" [startOpened]="true">
    <h4>Filter 1</h4>
  </sam-collapsible>
  <sam-collapsible [label]="'Test 2'">
    <sam-date name="example-date" [(value)]='dateModel'></sam-date>
  </sam-collapsible>
  <sam-collapsible label="'Test 3'">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ex aliquam, molestiae tempora. Nihil alias blanditiis excepturi architecto rerum repellendus adipisci ducimus minus, modi porro nostrum repudiandae perferendis placeat et.</p>
  </sam-collapsible>
</sam-filters-container>`;

@Component({
	selector: 'doc-spinner',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class FiltersContainerExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamFiltersContainerComponent";
  typedoc_content = "";

	example = code_example;
  dateModel: string = "2016-02-03";
    
  public base = '_docs/components/filters-container/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
