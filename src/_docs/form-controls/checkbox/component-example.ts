import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-checkbox',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samCheckbox
  [(model)]="checkboxModel"
  [name]="checkboxConfig.name"
  [options]="checkboxConfig.options"
  [label]="checkboxConfig.label"
  [hint]="checkboxConfig.hint"
  [errorMessage]="checkboxConfig.errorMessage"
  [hasSelectAll]="checkboxConfig.hasSelectAll">
</samCheckbox>
</doc-template>
`
})
export class CheckboxExampleComponent extends BaseExampleComponent implements OnInit {
	checkboxModel: any = ['ma'];
  checkboxConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'checkbox-dc'},
      {value: 'ma', label: 'Maryland', name: 'checkbox-maryland'},
      {value: 'va', label: 'Virginia', name: 'checkbox-virginia'},
    ],
    name: 'my-sr-name',
    label: 'Select a region',
  };
	typedoc_target = "checkbox.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samCheckbox
  [(model)]="checkboxModel"
  [name]="checkboxConfig.name"
  [options]="checkboxConfig.options"
  [label]="checkboxConfig.label"
  [hint]="checkboxConfig.hint"
  [errorMessage]="checkboxConfig.errorMessage"
  [hasSelectAll]="checkboxConfig.hasSelectAll">
</samCheckbox>`;
}