import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';
import { FormGroup, FormControl } from '@angular/forms';

const code_example = `
  <sam-intl-telephone-group
    [label]="'International Phone Number'"
    [group]="group"
    [phoneName]="'Intl Telephone'"
    [prefixName]="'Intl Country'"
  ></sam-intl-telephone-group>
`;

@Component({
	selector: 'doc-phone-group',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class PhoneGroupExampleComponent extends BaseExampleComponent implements OnInit {
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';
  typedoc_target = 'SamIntlPhoneGroup';
  typedoc_content = '';

  group = new FormGroup({
    prefix: new FormControl(),
    phone: new FormControl()
  });

  example = code_example;

  public base = '_docs/form-templates/international-phone/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
