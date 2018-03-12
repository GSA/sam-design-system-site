import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

@Component({
	selector: 'doc-banner',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
View the banner at the top
</doc-template>
`
})
export class BannerExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamBannerComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = `<sam-banner></sam-banner>`;//code example at app level
}