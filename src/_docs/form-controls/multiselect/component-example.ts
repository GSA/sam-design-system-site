import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-multiselect',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samMultiSelect [options]="types.options"></samMultiSelect>
</doc-template>
`
})
export class MultiSelectExampleComponent extends BaseExampleComponent implements OnInit {
	filterTypes = ['Error', 'Informational', 'Warning'];
	types = {
    label: 'Types',
    options:   [
      { label: 'Informational', value: 'Informational', name: 'informational' },
      { label: 'Error', value: 'Error', name: 'error' },
      { label: 'Warning', value: 'Warning', name: 'warning' }
    ]
  };
  typedoc_target = "/multiselect.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samMultiSelect [options]="types.options"></samMultiSelect>`;
}