import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

var code_example = `
<h3 class="sam-ui header">Normal</h3>
<sam-button [buttonId]="'primaryBtn'" [buttonText]="'Primary'" [buttonType]="'primary'"></sam-button>
<sam-button [buttonId]="'secondaryBtn'" [buttonText]="'Secondary'" [buttonType]="'secondary'"></sam-button>
<sam-button [buttonId]="'tertiaryBtn'" [buttonText]="'Tertiary'" [buttonType]="'tertiary'"></sam-button>
<sam-button [buttonId]="'negativeBtn'" [buttonText]="'Negative'" [buttonType]="'negative'"></sam-button>
<sam-button [buttonId]="'submitBtn'" [buttonText]="'Submit'" [buttonType]="'submit'"></sam-button>

<h3 class="sam-ui header">Disabled</h3>
<sam-button buttonDisabled="true" [buttonId]="'disabledPrimaryBtn'" [buttonText]="'Primary'" [buttonType]="'primary'"></sam-button>
<sam-button buttonDisabled="true" [buttonId]="'disabledSecondaryBtn'" [buttonText]="'Secondary'" [buttonType]="'secondary'"></sam-button>
<sam-button buttonDisabled="true" [buttonId]="'disabledTertiaryBtn'" [buttonText]="'Tertiary'" [buttonType]="'tertiary'"></sam-button>
<sam-button buttonDisabled="true" [buttonId]="'disabledNegativeBtn'" [buttonText]="'Negative'" [buttonType]="'negative'"></sam-button>
<sam-button buttonDisabled="true" [buttonId]="'disabledSubmitBtn'" [buttonText]="'Submit'" [buttonType]="'submit'"></sam-button>
`;

@Component({
	selector: 'doc-button',
  template: `
  <doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
  ` + code_example + `
  </doc-template>
  `
})
export class ButtonExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamButtonComponent";
  typedoc_content = "";
  markdown = require("html-loader!markdown-it-loader!./documentation.md");
  example = code_example.trim();
}