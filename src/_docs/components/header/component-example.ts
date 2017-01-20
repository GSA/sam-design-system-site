import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-header',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
See header at the top
</doc-template>
`
})
export class HeaderExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "header.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samHeader (headerDropdownControl)="toggleOverlay($event)"></samHeader>`;
}