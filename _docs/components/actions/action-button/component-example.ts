
import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-action-button',
  templateUrl: './component-example.html'
})
export class SamActionButtonExampleComponent {
  action = {
    name: 'edit',
    label: 'Edit',
    icon: 'fa fa-pencil',
    callback: () => { console.log('click'); }
  };
}
