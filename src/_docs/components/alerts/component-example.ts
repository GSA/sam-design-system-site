import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-alert',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samAlert [type]="'success'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'warning'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'error'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'info'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
</doc-template>
`
})
export class AlertExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "alert.component";
  typedoc_content = "";
	markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samAlert [type]="'success'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'warning'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'error'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>
<samAlert [type]="'info'" [title]="'Sample Title'" [description]="'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'"></samAlert>`;
}