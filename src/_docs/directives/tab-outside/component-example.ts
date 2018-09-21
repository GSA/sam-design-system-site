import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-taboutside',
  templateUrl: './component-example.html'
})
export class SamTabOutsideDirectiveExampleComponent {
  public tabAway = 'not tabbed away';

  public tabHandler() {
    this.tabAway = 'tabbed away';
  }
  public reset() {
    this.tabAway = 'not tabbed away';
  }
}
