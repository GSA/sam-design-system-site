import { Component } from '@angular/core';
import { SamFormService, SamDateComponent } from '@gsa-sam/sam-ui-elements';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'doc-date',
  templateUrl: './component-example.html',
})
export class SamDateComponentExampleComponent {
  public dateModel: string = '2016-02-03';
  basicInfoForm: FormGroup;
  errors = {
    startDate: '',
    endDate: '',
  };

  formHints = {
    startDate:
      'Provide the start date for the office. The start date has to be current or in the future',
    endDate:
      'Provide the end date for the office. The end date cannot be earlier than the start date',
  };

  constructor(public formService: SamFormService) {
    this.basicInfoForm = new FormGroup({
      ofcStartDate: new FormControl('2016-02-03', Validators.required),
      ofcEndDate: new FormControl('', Validators.required),
    });
  }

  dateErrorSamDate(controlName, comp: SamDateComponent) {
    if (
      controlName === 'ofcStartDate' &&
      this.basicInfoForm.value.ofcStartDate === null
    ) {
      return 'Date is Required';
    } else if (controlName === 'ofcEndDate' && this.errors.endDate) {
      return this.errors.endDate;
    }
    if (controlName === 'ofcStartDate' && this.errors.startDate) {
      return this.errors.startDate;
    } else if (controlName === 'ofcEndDate' && this.errors.endDate) {
      return this.errors.endDate;
    }
  }
  resetError(val) {
    if (this.errors[val] !== '') {
      this.errors[val] = '';
    }
  }

  onSubmit(ev) {
    if (this.basicInfoForm.valid) {
      this.formService.fireSubmit(this.basicInfoForm);
    }
  }
}
