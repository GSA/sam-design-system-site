import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<sam-name-entry [model]="nameModel" [prefix]="'ui-kit'"></sam-name-entry>`;

@Component({
	selector: 'doc-name-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class NameEntryExampleComponent extends BaseExampleComponent implements OnInit {
	nameModel = {
    title: "Mr.",
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    suffix: "Sr."
  };
  typedoc_target = "SamNameEntryComponent";
  typedoc_content = "";

  example = code_example;

  public base = '_docs/form-templates/name-entry/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
