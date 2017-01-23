import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="sticky-target">
	<div class="usa-grid">
		<div class="usa-width-one-fourth">
			<div sam-sticky [limit]="0" [container]="'sticky-target'" style="background:white;border:1px solid #000;">sticky content</div>
			&nbsp;
		</div>
		<div class="usa-width-three-fourths">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni placeat impedit eum natus dicta debitis quae, omnis dolorum, sed dolorem amet deserunt. Ad harum at quia laboriosam, autem perferendis.</p>
		</div>
	</div>
</div>`;

@Component({
	selector: 'doc-sticky',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class StickyExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "sticky.directive";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}