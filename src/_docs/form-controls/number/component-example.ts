import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samNumber 
  name="sample"
  [(ngModel)]="numValue">
</samNumber>`;

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
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}