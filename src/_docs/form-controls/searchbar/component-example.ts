import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samSearchbar></samSearchbar>`;

@Component({
	selector: 'doc-searchbar',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
<br/>
</doc-template>
`
})
export class SearchbarExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "searchbar.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}