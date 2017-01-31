import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samTabs (currentSelectedTab)="currentTabSelected($event)">
  <samTab tabTitle="Opportunity" (tabSelected)="tabSelected($event)">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa rerum nemo officia nam atque nulla tempore explicabo, at voluptatem omnis ad, possimus. Odio, ex, nostrum. Pariatur tempore, accusamus deleniti magnam!
  </samTab>
  <samTab tabTitle="Assistance" (tabSelected)="tabSelected($event)">
    Lorem ipsum dolor sit amet. Doloribus similique ea quam laudantium, cum ducimus labore natus dicta excepturi nam voluptas ut placeat eum esse, beatae rem. Tempore expedita, nostrum.
  </samTab>
</samTabs>`;

@Component({
	selector: 'doc-tabs',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class TabsExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "SamTabsComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
	currentTabSelected(evt){

	}
	tabSelected(evt){

	}
}