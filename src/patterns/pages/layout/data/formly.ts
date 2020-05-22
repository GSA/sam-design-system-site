import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * Array of configuration options for form controls.
 * The key specifies the corresponding field form the model,
 * and the type determines which UI control to use. Each
 * UI control can be configured using templateOptions. Any
 * valid member of the components interface can be set here
 * (see corresponding component documentation).
 */
export const fields: FormlyFieldConfig[] = [
  {
    key: 'fhInputText',
    type: 'text',
    wrappers: ['filter'],
    templateOptions: {
      label: 'Agency',
      id: 'agency',
      name: 'agency'
    }
  },
  {
    key: 'dateModel',
    type: 'date',
    wrappers: ['filter'],
    templateOptions: {
      name: 'date',
      label: 'Date Modified',
      id: 'date-modified'
    }
  },
  {
    key: 'checkbox',
    type: 'checkbox',
    wrappers: ['filter'],
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
export const model = {
  fhInputText: null,
  dateModel: null,
  checkbox: []
};
