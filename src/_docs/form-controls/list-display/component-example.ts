import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `
  <div class="usa-grid">
    <h2 class="usa-width-one-whole">String</h2>
    <div class="usa-width-one-whole">
      <sam-list-display [newValue]="newValue" [(ngModel)]="list">
        <input [ngModel]="yo" (ngModelChange)="addToList($event)" (keydown)="listenForEnter($event)">
      </sam-list-display>
      <br />
      Output: {{list}}
    </div>
    <h2 class="usa-width-one-whole">Key/Value Pair</h2>
    <div class="usa-width-one-whole">
      <sam-list-display [newValue]="newValueKV" [(ngModel)]="listKV" [config]="config">
        <input (change)="addToListKV($event.target.value)" >
      </sam-list-display>
      <br />
      Output: {{listKV | json}}
    </div>
  </div>
`;

@Component({
	selector: 'doc-datetime',
  template: `
              <doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
              `+code_example+`
              </doc-template>
            `
})
export class ListDisplayExampleComponent extends BaseExampleComponent implements OnInit {
  // Simple String Example
  newValue: string;
  list: Array<string> = [
    'Bethesda, MD',
    'Silver Spring, MD',
    'Alexandria, VA',
    'Arlington, VA',
    'Washington, DC'
  ];
  addToList(value) {
    this.newValue = value;
  }
  // Key/Value Example
  newValueKV: any;
  listKV: Array<any> = [
    {key: 'MD', value: 'Maryland'},
    {key: 'VA', value: 'Virginia'},
    {key: 'DC', value: 'Washington, DC'}
  ];
  config: any = {
    keyValueConfig: {
      keyProperty: 'key',
      valueProperty: 'value'
    }
  }
  addToListKV(value) {
    this.newValueKV = { key: Date.now() + value, value: value }
  }

  // Check for enter on input
  listenForEnter(event) {
    console.log(event);
    if (event.code === 'Enter' || event.keyIdentifier === 'Enter') {
      this.newValue = event.target.value;
      console.log(this.newValue);
      console.log(event.target.value);
    }
  }

  // Documentation config
  typedoc_target = "SamListDisplayComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = code_example;
}