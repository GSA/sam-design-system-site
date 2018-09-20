import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-click-outside',
  templateUrl: './component-example.html'
})
export class SamClickOutsideDirectiveExampleComponent {
  clickedValue = 'None'; 

  public clickOutsideHandler() {
    this.clickedValue = 'Clicked outside \'Sample Target\'';
  }

  public clickInsideHandler() {
    this.clickedValue = 'Clicked inside \'Sample Target\'';
  }
}
