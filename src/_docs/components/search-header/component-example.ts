import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-search-header',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samSearchHeader></samSearchHeader>
</doc-template>
`
//<samSearchHeader (searchHeaderDropdownControl)="toggleOverlay($event)"></samSearchHeader>
})
export class SearchHeaderExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "searchbar.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<doc-accordion-dummy [sampleInput]="'456'"></doc-accordion-dummy>`;
	toggleOverlay(evt){
		//nothing
	}
}