import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `
<sam-breadcrumbs [crumbs]="crumbs"></sam-breadcrumbs>
`;
@Component({
	selector: 'doc-breadcrumb',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class BreadcrumbExampleComponent extends BaseExampleComponent implements OnInit {
  crumbs = [
    { breadcrumb: 'Back to my workspace', url: '/workspace' },
    { breadcrumb: '...'}
  ];
  typedoc_target = "SamBreadcrumbsComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
	example = code_example;//code example at app level
}