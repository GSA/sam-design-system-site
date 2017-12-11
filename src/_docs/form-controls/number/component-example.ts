import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-number 
  name="sample"
  [(ngModel)]="numValue">
</sam-number>`;

@Component({
	selector: 'doc-number',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class NumberExampleComponent extends BaseExampleComponent implements OnInit {
	numValue = 10;
	typedoc_target = "SamNumberComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}