
import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-breadcrumbs',
  templateUrl: './component-example.html'
})
export class SamBreadcrumbsComponentExampleComponent {
  crumbs = [
    { breadcrumb: 'Homepage', urlmock: true },
    { breadcrumb: 'Documentation Page'}
  ];

  handler(evt) {
    console.log(evt);
  }
}
