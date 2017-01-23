import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samSelect
  [(model)]="selectModel"
  [name]="selectConfig.name"
  [options]="selectConfig.options"
  [label]="selectConfig.label">
</samSelect>`;

@Component({
	selector: 'doc-select',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class SelectExampleComponent extends BaseExampleComponent implements OnInit {
	selectModel = '';
  selectConfig = {
    options: [
      {value:'', label: 'Default option', name: 'empty', disabled: true},
      {value: 'dc', label: 'Washington DC', name: 'dc'},
      {value: 'ma', label: 'Maryland', name: 'maryland'},
      {value: 'va', label: 'Virginia', name: 'virginia'},
    ],
    disabled: false,
    label: 'Region',
    name: 'region'
  };
  typedoc_target = "/select.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = example;
}