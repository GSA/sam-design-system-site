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
      name: 'agency',
    },
  },
  {
    key: 'dateModel',
    type: 'date',
    wrappers: ['filter'],
    templateOptions: {
      name: 'date',
      label: 'Date Modified',
      id: 'date-modified',
    },
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
      ],
    },
  },
];

/**
 * Provide any model to formly. The key for each property
 * corresponds to the key on each FormlyField config.
 */
export const model = {
  fhInputText: null,
  dateModel: null,
  checkbox: [],
};
