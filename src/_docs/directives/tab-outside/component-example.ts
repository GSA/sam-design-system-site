import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<input sam-tab-outside (tabOutside)="tabHandler($event)" /> 
<p>{{ tabAway }}</p>
<button (click)="reset()">reset</button>`;

@Component({
	selector: 'doc-taboutside',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class TabOutsideExampleComponent extends BaseExampleComponent {
  tabAway = "not tabbed away";
  tabHandler(evt){
    this.tabAway = "tabbed away";
  }
  reset(){
    this.tabAway = "not tabbed away";
  }
	typedoc_target = "SamTabOutsideDirective";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}