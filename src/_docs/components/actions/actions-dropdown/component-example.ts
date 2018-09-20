
import {
  Component,
} from '@angular/core';

@Component({
  selector: 'doc-sam-actions-dropdown',
  templateUrl: './component-example.html'
})
export class SamActionsDropdownComponentExampleComponent {
  actions: Array<any> = [
    {
      name: 'edit',
      label: 'Edit',
      icon: 'fa fa-pencil',
      callback: () => { console.log('edit'); }
    },
    {
      name: 'delete',
      label: 'Delete',
      icon: 'fa fa-trash',
      callback: () => { console.log('delete'); }
    },
    {
      name: 'save',
      label: 'Save',
      icon: 'fa fa-floppy-o',
      callback: () => { console.log('save'); }
    }
  ];
}
