import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<button sam-click-outside (click)="clickInsideHandler()" (clickOutside)="clickOutsideHandler()">Sample Target</button>`;

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
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
	clickOutsideHandler(){
		this.clickedValue = "Clicked outside 'Sample Target'";
	}
	clickInsideHandler(){
		this.clickedValue = "Clicked inside 'Sample Target'";
	}
}