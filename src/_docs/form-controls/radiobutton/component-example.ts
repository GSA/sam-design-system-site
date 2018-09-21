import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-radio',
  templateUrl: './component-example.html'
})
export class SamRadioComponentExampleComponent {
  radioModel: any = 'ma';
  radioConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'radio-dc'},
      {value: 'ma', label: 'Maryland', name: 'radio-maryland'},
      {value: 'va', label: 'Virginia', name: 'radio-virginia'},
    ],
    name: 'radio-component',
    label: 'Select a region',
    errorMessage: '',
    hint: ''
  };
}
