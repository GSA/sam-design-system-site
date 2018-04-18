import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example = `<sam-phone-entry
  [phoneNumberTemplate]="'___-___-____'"
  [(model)]="phoneModel"
  (emitter)="phoneModelChange($event)">
</sam-phone-entry>
<sam-phone-entry
  [(model)]="phoneModel2"
  (emitter)="phoneModel2Change($event)">
</sam-phone-entry>`;

@Component({
  selector: 'doc-phone-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
` + code_example + `
</doc-template>
`
})
export class PhoneEntryExampleComponent extends BaseExampleComponent implements OnInit {
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';
  typedoc_target = 'SamPhoneEntryComponent';
  typedoc_content = '';

  example = code_example;

  public base = '_docs/form-templates/phone-entry/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  public phoneModelChange(phoneNum) {
    this.phoneModel = phoneNum;
  }

  public phoneModel2Change(phoneNum) {
    this.phoneModel2 = phoneNum;
  }
}
