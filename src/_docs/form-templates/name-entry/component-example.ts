import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

@Component({
	selector: 'doc-name-entry',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
<samNameEntry [model]="nameModel" [prefix]="'ui-kit'"></samNameEntry>
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
  typedoc_target = "name-entry.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samNameEntry [model]="nameModel" [prefix]="'ui-kit'"></samNameEntry>`;
}