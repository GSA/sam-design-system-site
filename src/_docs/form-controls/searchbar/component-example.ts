import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-searchbar',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samSearchbar></samSearchbar>
<br/>
</doc-template>
`
})
export class SearchbarExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "searchbar.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samSearchbar></samSearchbar>`;
}