import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-multiselect-dropdown',
  template: `
<doc-template [markdown]="markdown" [example]="example">
<doc-accordion-dummy></doc-accordion-dummy>
</doc-template>
`
//samMultiSelectDropdown
})
export class MultiselectDropdownExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "multiselect-dropdown.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<doc-accordion-dummy [sampleInput]="'456'"></doc-accordion-dummy>`;
}