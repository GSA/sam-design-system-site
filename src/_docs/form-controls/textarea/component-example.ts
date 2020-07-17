import { Component } from '@angular/core';

@Component({
  selector: 'doc-textarea',
  templateUrl: './component-example.html',
})
export class SamTextareaComponentExampleComponent {
  textareaModel = 'Some Text';
  textareaConfig = {
    label: 'Enter zipcode',
    hint: 'Zipcode can be short or long version',
    name: 'aria-friendly-name',
    disabled: false,
  };
}
