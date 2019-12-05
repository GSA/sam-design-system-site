import {
  Component
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'doc-sam-filters',
  templateUrl: './component-example.html'
})
export class SamFiltersComponentExampleComponent {
  public fields: FormlyFieldConfig[] = [
    {
      key: 'fhInputText',
      type: 'text',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Agency',
        id: 'agency',
        name: 'agency'
      }
    },
    {
      key: 'dateModel',
      type: 'date',
      wrappers: ['form-field'],
      templateOptions: {
        name: 'date',
        label: 'Date Modified',
        id: 'date-modified'
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      wrappers: ['form-field'],
      templateOptions: {
        name: 'checkbox',
        label: 'Checkbox Example',
        id: 'checkbox',
        options: [
          { value: 'one', label: 'one', name: 'one' },
          { value: 'two', label: 'two', name: 'two' },
          { value: 'three', label: 'three', name: 'three' },
          { value: 'four', label: 'four', name: 'four' },
          { value: 'five', label: 'five', name: 'five' },
        ]
      }
    },
    {
      key: 'expirationDateOpen',
      type: 'datepicker',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Expiration Date (no validation)',
      }
    },
    {
      key: 'expirationDateMin',
      type: 'datepicker',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Expiration Date (Min only Validation)',
        minDate: new Date(2019, 9, 5)
      }
    },
    {
      key: 'expirationDatemax',
      type: 'datepicker',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Expiration Date (Max only Validation)',
        maxDate: new Date(2019, 9, 25)
      }
    },
    {
      key: 'expirationDateboth',
      type: 'datepicker',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Expiration Date (Min and Max Validation)',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    },
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    },
  ];

  /**
   * Provide any model to formly. The key for each property
   * corresponds to the key on each FormlyField config.
   */
  public model: any = {
    fhInputText: null,
    dateModel: null,
    checkbox: []
  };

  public form = new FormGroup({});
}
