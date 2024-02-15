import {
  Component
} from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { SamFormService } from '@gsa-sam/sam-ui-elements';

@Component({
  selector: 'doc-phone-group',
  templateUrl: './component-example.html'
})
export class PhoneGroupExampleComponent {
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';

  group = new UntypedFormGroup({
    prefix: new UntypedFormControl('', Validators.required),
    phone: new UntypedFormControl('1234567890', Validators.required),
    extension: new UntypedFormControl('91234787', Validators.required)
  });
  public isRequired: boolean = true;
  public form: UntypedFormGroup;
  public extensionRequiredForm: UntypedFormGroup;
  public message;
  public messages = ['Big bad error 1', 'big bad error 2'];
  public submitted = false;

  public textConfig = {
    name: 'test',
    label: 'Name',
    hint: ''
  };

  constructor(
    public formService: SamFormService,
    private _fb: UntypedFormBuilder) {

    this.form = this._fb.group(
      {
        name: [null, Validators.required],
        phone: new UntypedFormGroup(
          {
            prefix: new UntypedFormControl(null, Validators.required),
            phone: new UntypedFormControl('1234567890', Validators.required),
            extension: new UntypedFormControl('')
          }
        )
      }
    );
  }

  public onSubmit (ev) {
    this.formService.fireSubmit(this.form);
  }

  public reset () {
    this.form.reset();
    this.formService.fireReset(this.form);
  }

}
