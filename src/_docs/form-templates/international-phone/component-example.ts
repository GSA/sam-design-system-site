import {
  Component,
  OnInit
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SamFormService } from 'sam-ui-elements/src/ui-kit/form-service';

const code_example = `
  <h2>Standalone Example</h2>
  <sam-intl-telephone-group
    [label]="'International Phone Number'"
    [group]="group"
    [phoneName]="'Intl Telephone'"
    [prefixName]="'Intl Country'"
  ></sam-intl-telephone-group>

  <h2>Example using Form Service</h2>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <sam-intl-telephone-group
      [useFormService]="true"
      [label]="'International Phone Number'"
      [group]="form.controls.phone"
      [phoneName]="'Intl Telephone'"
      [prefixName]="'Intl Country'"
    ></sam-intl-telephone-group>

    <div>
      <button class="sam-ui button secondary" type="reset" (click)="reset()">Reset</button>
      <button class="sam-ui button primary" type="submit">Submit</button>
    </div>
  </form>

  {{ form.status | json }}
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
  // @ViewChild(SamIntlPhoneGroup) public phone: SamIntlPhoneGroup;
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';
  typedoc_target = 'SamIntlPhoneGroup';
  typedoc_content = '';

  group = new FormGroup({
    prefix: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  example = code_example;

  public base = '_docs/form-templates/international-phone/';
  public form: FormGroup;
  public message;
  public messages = ['Big bad error 1', 'big bad error 2'];
  public submitted = false;

  public textConfig = {
    name: 'test',
    label: 'Name',
    hint: ''
  };

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService,
    public formService: SamFormService,
    private _fb: FormBuilder) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));

    this.form = this._fb.group(
      {
        name: ['', Validators.required],
        phone: new FormGroup(
          {
            prefix: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required)
          }
        )
      }
    );
  }

  public ngOnInit () {
    super.ngOnInit();
  }

  private _strategy (): boolean {
    return !!this.submitted;
  }

  public onSubmit () {
    this.formService.fireSubmit();
  }

  public reset () {
    this.formService.fireReset();
  }
}
