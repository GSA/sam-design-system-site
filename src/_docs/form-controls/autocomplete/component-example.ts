import { Component } from '@angular/core';

@Component({
  selector: 'doc-autocomplete',
  templateUrl: './component-example.html',
})
export class SamAutocompleteComponentExampleComponent {
  public expl;
  public expl2;
  public value = 'apple';
  public value2 = { code: 'code05', value: 'pineapple' };
  public options = ['apple', 'orange', 'grape', 'banana', 'pineapple'];
  public kv_config = {
    keyValueConfig: {
      keyProperty: 'code',
      valueProperty: 'value',
    },
  };
  public kv_options = [
    {
      code: 'code01',
      value: 'apple',
    },
    {
      code: 'code02',
      value: 'orange',
    },
    {
      code: 'code03',
      value: 'grape',
    },
    {
      code: 'code04',
      value: 'banana',
    },
    {
      code: 'code05',
      value: 'pineapple',
    },
  ];
  public stateValue = '';
  public countryValue = '';
}
