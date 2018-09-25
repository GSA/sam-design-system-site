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
    phone: new FormControl('1234', Validators.required)
  });
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
    public formService: SamFormService,
    private _fb: FormBuilder) {

    this.form = this._fb.group(
      {
        name: [null, Validators.required],
        phone: new FormGroup(
          {
            prefix: new FormControl(null, Validators.required),
            phone: new FormControl('1234', Validators.required)
          }
        )
      }
    );
  }

  public onSubmit () {
    this.formService.fireSubmit(this.form);
  }

  public reset () {
    this.form.reset();
    this.formService.fireReset(this.form);
  }
}
