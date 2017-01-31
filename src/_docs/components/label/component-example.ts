import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samLabel [labelType]="'big'" [labelText]="'Big Label'"></samLabel>`;

@Component({
	selector: 'doc-label',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class LabelExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamLabelComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}