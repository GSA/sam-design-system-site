import {
  Component, OnInit
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'doc-textarea',
  templateUrl: './component-example.html'
})
export class SamTextareaComponentExampleComponent implements OnInit {
  textareaModel = 'Some Text';
  orgType = 'department';
  errors = {
    description: 'required'
  };
  textareaConfig = {
    label: 'Enter zipcode',
    hint: 'Zipcode can be short or long version',
    name: 'aria-friendly-name',
    disabled: false,
  };
  basicInfoForm: FormGroup;
  ngOnInit() {
    this.basicInfoForm = new FormGroup({
      orgDescription: new FormControl('', []),
    });
  }
  isDepartment() {
    return this.orgType === 'department';
  }
}
