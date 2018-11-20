import { FormlyFieldConfig } from '@ngx-formly/core';
export const fields: FormlyFieldConfig[] = [
    {
        key: 'type',
        type: 'text',
        wrappers: ['filter'],
        templateOptions: {
          label: 'Federal Organizations',
          id: 'federalOrganizations',
          name: 'federalOrganizations'
        }
      },
    {
        key: 'status',
        type: 'checkbox',
        wrappers: ['filter'],
        templateOptions: {
          name: 'checkbox',
         label: 'Status',
          id: 'checkbox',
          options: [
            { value: 'published', label: 'Published', name: 'published' },
            { value: 'draft', label: 'Draft', name: 'draft' },
            { value: 'readyForReview', label: 'Ready For Review', name: 'readyForReview' },
            { value: 'cancelled', label: 'Cancelled', name: 'cancelled' },
            { value: 'inactive', label: 'Inactive', name: 'inactive' },
          ]
        }
      },
      {
        key: 'dateModel',
        type: 'date',
        wrappers: ['filter'],
        templateOptions: {
          name: 'date',
          label: 'Created Date',
          id: 'date-modified'
        }
      },
      {
        key: 'title',
        type: 'text',
        wrappers: ['filter'],
        templateOptions: {
          name: 'typeofassistance',
          label: 'Opportunity Title',
          id: 'type-of-assistance'
        }
      },
];

export const model = {
    type: null,
    dateModel: null,
    status: [],
    title: null
  };
