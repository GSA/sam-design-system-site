import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-spinner></sam-spinner>`;

@Component({
	selector: 'doc-spinner',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class SpinnerExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamSpinnerComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}