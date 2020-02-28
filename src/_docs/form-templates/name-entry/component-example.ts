import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-name-entry',
  templateUrl: './component-example.html'
})
export class NameEntryExampleComponent {
  nameModel = {
    title: 'Mr.',
    firstName: 'John',
    middleName: '',
    lastName: 'Doe',
    suffix: 'Sr.'
  };
}
