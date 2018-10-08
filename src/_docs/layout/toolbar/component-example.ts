
import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-toolbar',
  templateUrl: './component-example.html'
})
export class SamToolbarComponentExampleComponent {
  actionHandler(event) {
    console.log(event);
  }
}
