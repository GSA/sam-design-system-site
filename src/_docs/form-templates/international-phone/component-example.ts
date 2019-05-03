import {
  Component
} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SamFormService } from '@gsa-sam/sam-ui-elements';

@Component({
  selector: 'doc-phone-group',
  templateUrl: './component-example.html'
})
export class PhoneGroupExampleComponent {
  phoneModel = '123-456-3366';
  phoneModel2 = '1+(123)456-3366';

  group = new FormGroup({
    prefix: new FormControl('', Validators.required),
    phone: new FormControl('1234567890', Validators.required),
    extension: new FormControl('91234787', Validators.required)
  });
  public isRequired: boolean = true;
  public form: FormGroup;
  public extensionRequiredForm: FormGroup;
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
    private _fb: FormBuilder) {

    this.form = this._fb.group(
      {
        name: [null, Validators.required],
        phone: new FormGroup(
          {
            prefix: new FormControl(null, Validators.required),
            phone: new FormControl('1234567890', Validators.required),
            extension: new FormControl('')
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
