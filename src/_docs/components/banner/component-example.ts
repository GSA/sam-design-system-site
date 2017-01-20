import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-banner',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
View the banner at the top
</doc-template>
`
})
export class BannerExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "banner.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samBanner></samBanner>`;
}