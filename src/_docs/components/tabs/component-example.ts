import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-tabs',
  templateUrl: './component-example.html'
})
export class SamTabsComponentExampleComponent {
  public currentTabSelected(evt) {
    console.log(evt);
  }

  public tabSelected(evt) {
    console.log(evt);
  }
}
