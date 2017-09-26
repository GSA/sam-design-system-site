import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<sam-sidenav [model]="config"></sam-sidenav>`;

@Component({
	selector: 'doc-sidenav',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
See sidenav on the left
</doc-template>
`
})
export class SidenavExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamSidenavComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
	example = code_example;
}