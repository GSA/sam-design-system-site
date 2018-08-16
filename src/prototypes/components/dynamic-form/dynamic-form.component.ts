import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteService } from '@gsa-sam/sam-ui-elements';
import { TestAutocompleteService } from './test-autocomplete.service';
import { DemoHelpers } from './demo-helpers';

@Component({
  selector: 'sam-dynamic-form',
  template: `
    <h1>Formly Demo</h1>
    <p>{{ model | json }}</p>

    <!-- <form> Tag is not strictly necessary, but it is
      provided as an example -->
    <form [formGroup]="form">

      <!-- Formly creates the Reactive form group from the
      empty group you provide by with the values from the
      model. Fields are used to configure the UI components -->
      <formly-form [form]="form" [fields]="fields" [model]="model">

        <button type="button"
          class="btn btn-default"
          (click)="updateFieldsFromComponent()">
          Submit
        </button>

      </formly-form>

    </form>
  `,
  providers: [
    {
      provide: AutocompleteService,
      useClass: TestAutocompleteService
    }
  ],
})
export class SamDynamicFormComponent {
  /**
   * Provide an empty FormGroup to Formly. It dynamically
   * adds controls.
   */
  public form = new FormGroup({});

  /**
   * Provide any model to formly. The key for each property
   * corresponds to the key on each FormlyField config.
   */
  public model = {
    email: {
      key: 'start',
      value: 'start'
    },
    text: 'Hello World',
    checkbox: [],
    custom: ''
  };

  /**
   * Array of configuration options for form controls.
   * The key specifies the corresponding field form the model,
   * and the type determines which UI control to use. Each
   * UI control can be configured using templateOptions. Any
   * valid member of the components interface can be set here
   * (see corresponding component documentation).
   */
  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'autocomplete',
      templateOptions: {
        labelText: 'Email address',
        placeholder: 'Enter email',
        name: 'autocomplete test',
        id: 'unique_and_meaningful_id_value_1',
        hint: 'Show a hint here...',
        config: {
          categoryProperty: 'category',
          categoryIsSelectable: true,
          keyValueConfig: {
            keyProperty: 'key',
            valueProperty: 'value',
            subheadProperty: 'subhead'
          }
        },
        allowAny: false,
        categories: [
          {
            key: 'People',
            value: 'People'
          },
          {
            key: 'Places',
            value: 'Places'
          }
        ],
      },
      validators: {
        ip: {
          expression: function TestValidator () { return true; },
          message: 'Broke as a joke',
        },
      },
    },
    {
      key: 'custom',
      type: 'custom-autocomplete',
      templateOptions: {
        labelText: 'Custom',
        placeholder: 'Custom',
        name: 'autocomplete test',
        id: 'unique_and_meaningful_id_value_2',
        hint: 'Show a hint here...',
        config: {
          categoryProperty: 'category',
          categoryIsSelectable: true,
          keyValueConfig: {
            keyProperty: 'key',
            valueProperty: 'value',
            subheadProperty: 'subhead'
          }
        },
        allowAny: false,
        required: true,
      }
    },
    {
      key: 'text',
      type: 'text',
      templateOptions: {
        label: 'Text',
        name: 'Text',
        id: 'Text'
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        options: [
          {
            value: 'dc',
            label: 'DC',
            name: 'checkbox-dc'
          },
          {
            value: 'ma',
            label: 'Maryland',
            name: 'checkbox-maryland'
          },
          {
            value: 'va',
            label: 'Virginia',
            name: 'checkbox-virginia'
          },
        ],
        name: 'my-sr-name',
        label: 'Select a region (normal)',
        hasSelectAll: false,
        errorMessage: null,
        hint: ''
      }
    }
  ];

  /**
   * Demoing how to set the value of the control from within
   * the component
   */
  public updateFieldsFromComponent () {
    const val = DemoHelpers.random().toString();

    // Updating component config through fields
    this.fields[0].templateOptions.labelText = val;

    // To update form values, use Reactive forms like normal
    this.form.controls.email.setValue(
      { key: val, value: val }
    );

    this.form.controls.checkbox.setValue(
      DemoHelpers.checkboxTest(val)
    );
  }
}

