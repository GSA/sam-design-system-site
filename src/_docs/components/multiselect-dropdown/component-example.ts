import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-multiselect-dropdown',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samMultiSelectDropdown [disabled]='alertBeingEdited' [(model)]="filterTypes" [label]="types.label" [options]="types.options" [name]="'types'"></samMultiSelectDropdown>
</doc-template>
`
//samMultiSelectDropdown
})
export class MultiselectDropdownExampleComponent extends BaseExampleComponent implements OnInit {
	filterTypes = ['Error', 'Informational', 'Warning'];
	types = {
    label: 'Types',
    options:   [
      { label: 'Informational', value: 'Informational', name: 'informational' },
      { label: 'Error', value: 'Error', name: 'error' },
      { label: 'Warning', value: 'Warning', name: 'warning' }
    ]
  };
  typedoc_target = "multiselect-dropdown.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samMultiSelectDropdown [disabled]='alertBeingEdited' [(model)]="filterTypes" [label]="types.label" [options]="types.options" [name]="'types'"></samMultiSelectDropdown>`;
}