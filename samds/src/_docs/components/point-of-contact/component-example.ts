import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-poc [data]="pointOfContact"></sam-poc>`;

@Component({
	selector: 'doc-poc',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class POCExampleComponent extends BaseExampleComponent implements OnInit {
	pointOfContact = {
    fullName:"John Doe",
    address: "1234 Waterway Rd",
    city: "Norfolk",
    state: "VA",
    zip:"12345",
    email: "jdoe@test.gov",
    phone: "222-222-2222",
    website: "www.testsite.gov"
  };
  typedoc_target = "SamPointOfContactComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}