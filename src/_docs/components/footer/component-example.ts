import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-footer',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">

</doc-template>
`
})
export class FooterExampleComponent extends BaseExampleComponent implements OnInit {
	typedoc_target = "footer.component";
  typedoc_content = "";
	markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samFooter></samFooter>`;
}