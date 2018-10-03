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
    }
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
