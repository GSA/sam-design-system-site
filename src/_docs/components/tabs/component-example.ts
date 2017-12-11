import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-tabs (currentSelectedTab)="currentTabSelected($event)">
  <sam-tab tabTitle="Opportunity" active="true" (tabSelected)="tabSelected($event)">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa rerum nemo officia nam atque nulla tempore explicabo, at voluptatem omnis ad, possimus. Odio, ex, nostrum. Pariatur tempore, accusamus deleniti magnam!
  </sam-tab>
  <sam-tab tabTitle="Assistance" (tabSelected)="tabSelected($event)">
    Lorem ipsum dolor sit amet. Doloribus similique ea quam laudantium, cum ducimus labore natus dicta excepturi nam voluptas ut placeat eum esse, beatae rem. Tempore expedita, nostrum.
  </sam-tab>
</sam-tabs>`;

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
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
	currentTabSelected(evt){

	}
	tabSelected(evt){

	}
}