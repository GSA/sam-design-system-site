import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-text',
  templateUrl: './component-example.html'
})
export class SamTextComponentExampleComponent {
  textModel = 'Some Text';
  textConfig = {
    label: 'Enter zipcode',
    hint: 'Zipcode can be short or long version',
    name: 'aria-friendly-name',
    disabled: false,
  };
}
