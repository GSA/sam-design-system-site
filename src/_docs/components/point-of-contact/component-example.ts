import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samPOC [data]="pointOfContact"></samPOC>`;

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
  typedoc_target = "point-of-contact.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}