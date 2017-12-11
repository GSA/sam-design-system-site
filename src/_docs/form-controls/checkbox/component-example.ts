import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-checkbox
  [(model)]="checkboxModel"
  [name]="checkboxConfig.name"
  [options]="checkboxConfig.options"
  [label]="checkboxConfig.label"
  [hint]="checkboxConfig.hint"
  [errorMessage]="checkboxConfig.errorMessage"
  [hasSelectAll]="checkboxConfig.hasSelectAll">
</sam-checkbox>
<br/>
<sam-checkbox
[(model)]="checkboxModel"
[name]="disabledCheckboxConfig.name"
[options]="disabledCheckboxConfig.options"
[label]="disabledCheckboxConfig.label"
[hint]="disabledCheckboxConfig.hint"
[errorMessage]="disabledCheckboxConfig.errorMessage"
[hasSelectAll]="disabledCheckboxConfig.hasSelectAll"
[disabled]="true">
</sam-checkbox>`;

@Component({
	selector: 'doc-checkbox',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
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
    label: 'Select a region (normal)',
  };
  disabledCheckboxConfig = {
    options: [
      {value: 'dc', label: 'DC', name: 'checkbox-dc'},
      {value: 'ma', label: 'Maryland', name: 'checkbox-maryland'},
      {value: 'va', label: 'Virginia', name: 'checkbox-virginia'},
    ],
    name: 'my-sr-name',
    label: 'Select a region (disabled)',
  };
	typedoc_target = "SamCheckboxComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}