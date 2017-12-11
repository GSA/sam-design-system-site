import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-multiselect-dropdown 
  [disabled]='alertBeingEdited' 
  [(model)]="filterTypes" 
  [label]="types.label" 
  [options]="types.options" 
  [name]="'types'"></sam-multiselect-dropdown>`;

@Component({
	selector: 'doc-multiselect-dropdown',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
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
  typedoc_target = "SamMultiSelectDropdownComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}