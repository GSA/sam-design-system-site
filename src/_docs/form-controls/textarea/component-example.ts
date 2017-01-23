import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `<samTextArea
  [(ngModel)]="textareaModel"
  [name]="textareaConfig.name"
  [label]="textareaConfig.label"
  [hint]="textareaConfig.hint"
  [errorMessage]="textareaConfig.errorMessage"
  [disabled]="textareaConfig.disabled">
</samTextArea>`;

@Component({
	selector: 'doc-textarea',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class TextareaExampleComponent extends BaseExampleComponent implements OnInit {
	textareaModel= 'Some Text';
  textareaConfig = {
    label: "Enter zipcode",
    hint: "Zipcode can be short or long version",
    errorMessage: 'Uh-oh, something went wrong',
    name: 'aria-friendly-name',
    disabled: false,
  };
  typedoc_target = "textarea.component";
  typedoc_content = "";
  markdown = require("html-loader!markdown-loader!./documentation.md");
	example = `<samTextArea
  [(ngModel)]="textareaModel"
  [name]="textareaConfig.name"
  [label]="textareaConfig.label"
  [hint]="textareaConfig.hint"
  [errorMessage]="textareaConfig.errorMessage"
  [disabled]="textareaConfig.disabled">
</samTextArea>`;
}