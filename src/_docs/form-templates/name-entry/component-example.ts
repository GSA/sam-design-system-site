import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<sam-name-entry [model]="nameModel" [prefix]="'ui-kit'"></sam-name-entry>`;

@Component({
	selector: 'doc-name-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class NameEntryExampleComponent extends BaseExampleComponent implements OnInit {
	nameModel = {
    title: "Mr.",
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    suffix: "Sr."
  };
  typedoc_target = "SamNameEntryComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
	example = code_example;
}