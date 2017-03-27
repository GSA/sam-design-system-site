import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <sam-history [currentId]="'1a610c814d73fc23a6b71decc9b4c548'" [data]="history"></sam-history>
  </div>
</div>`;

@Component({
	selector: 'doc-history',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class HistoryExampleComponent extends BaseExampleComponent implements OnInit {
  history = [
    {
      authoritative: "0",
      date: "Feb 04, 2016 8:20am",
      description: "Lorem Ipsum",
      id: "0564cc38f28e1a85ea66de2bb78dae29",
      index: "1",
      isTagged: false,
      title: "Original Combined Synopsis/Solicitation",
      url: "opportunities/0564cc38f28e1a85ea66de2bb78dae29",
    },
    {
      authoritative: "1",
      date: "Mar 13, 2016 1:21pm",
      description: "",
      id: "1a610c814d73fc23a6b71decc9b4c548",
      index: "2",
      isTagged: false,
      title: "Award Notice",
      url: "opportunities/1a610c814d73fc23a6b71decc9b4c548",
    }
  ];
  typedoc_target = "SamHistoryComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}