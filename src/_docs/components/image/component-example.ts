
import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-image',
  templateUrl: './component-example.html'
})
export class SamImageComponentExampleComponent {
  public fileChangeHandler(event)  {
    console.log(event);
  }
}
