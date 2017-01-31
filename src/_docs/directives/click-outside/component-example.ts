import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<button samClickOutside (click)="clickInsideHandler()" (clickOutside)="clickOutsideHandler()">Sample Target</button>`;

@Component({
	selector: 'doc-click-outside',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<p>Click value: {{clickedValue}}</p>
`+code_example+`
</doc-template>
`
})
export class ClickOutsideExampleComponent extends BaseExampleComponent implements OnInit {
	clickedValue = "None";
	typedoc_target = "SamClickOutsideDirective";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
	clickOutsideHandler(){
		this.clickedValue = "Clicked outside 'Sample Target'";
	}
	clickInsideHandler(){
		this.clickedValue = "Clicked inside 'Sample Target'";
	}
}