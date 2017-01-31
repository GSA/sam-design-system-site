import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

//tabs/spacing matters for code example block
var code_example = `<samAlert [type]="'success'" [title]="'Sample Title 1'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'warning'" [title]="'Sample Title 2'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'error'" [title]="'Sample Title 3'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'info'" [title]="'Sample Title 4'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>`;

@Component({
	selector: 'doc-alert',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class AlertExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "SamAlertComponent";
  typedoc_content = "";
	markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}