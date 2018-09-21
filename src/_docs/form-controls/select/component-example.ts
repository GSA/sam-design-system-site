import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-select',
  templateUrl: './component-example.html'
})
export class SamSelectComponentExampleComponent {
  selectModel = '';
  selectConfig = {
    options: [
      {value: '', label: 'Default option', name: 'empty', disabled: true},
      {value: 'dc', label: 'Washington DC', name: 'dc'},
      {value: 'ma', label: 'Maryland', name: 'maryland'},
      {value: 'va', label: 'Virginia', name: 'virginia'},
    ],
    disabled: false,
    label: 'Region',
    name: 'region'
  };
}
