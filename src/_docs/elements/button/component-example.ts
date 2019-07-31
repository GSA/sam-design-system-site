import { Component, Input, OnInit} from '@angular/core';

import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example_1 = `<sam-button buttonText="Create" buttonType="primary"></sam-button>`;
const code_example_1_2 = `<sam-button buttonText="Submit" buttonType="submit"></sam-button>`;
const code_example_1_3 = `<button class="sam-ui button primary" type="submit">Submit</button>`;
const code_example_2 = `<sam-button buttonText="Add" buttonType="secondary"></sam-button>`;
const code_example_3 = `<sam-button buttonText="Share" buttonType="tertiary"></sam-button>`;
const code_example_4 = `<sam-button buttonText="Delete" buttonType="negative"></sam-button>`;
const code_example_disabled = `
<sam-button buttonDisabled="true" buttonText="Button" buttonType="primary"></sam-button>
<sam-button buttonDisabled="true" buttonText="Button" buttonType="secondary"></sam-button>
<sam-button buttonDisabled="true" buttonText="Button" buttonType="tertiary"></sam-button>
<sam-button buttonDisabled="true" buttonText="Button" buttonType="negative"></sam-button>`;

@Component({
  selector: 'doc-button',
  template: `

  <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

  <div class="sam-ui hidden divider"></div>

  <h2 class="sam-ui header">Actions</h2>

  <h3 class="sam-ui dividing header">Primary</h3>
  <p class="doc-BodyText">
  Use the darker, primary color set for the most important buttons the
  users will look for in order to initiate an activity (<em>e.g., Create Listing</em>)
  or complete an activity (<em>e.g., Submit</em>). Typically no more than one button
  in this color should appear on the page, although there may be occasions
  to modify this rule. Primary buttons generally appear at the top of a
  page when the action is to initiate work, or at the bottom of the form,
  such as when the action is to submit that form.
  </p>
  <sam-code-example language="html" [code]="example_1">
  ` + code_example_1 + `
  </sam-code-example>

  <div class="sam-ui info message">
  <div class="header">
  Submit buttons
  </div>
  <p>
  There is a specific button type for submit buttons.
  </p>
  </div>
  <sam-code-example language="html" [code]="example_1_2">
  ` + code_example_1_2 + `
  </sam-code-example>

  <strong>Will generate the code below</strong>
  <sam-code-example language="html" [code]="example_1_3"></sam-code-example>


  <div class="sam-ui hidden divider"></div>

  <h3 class="sam-ui dividing header">Secondary</h3>
  <p class="doc-BodyText">
  Use the secondary color set for the buttons of secondary importance.
  Examples include search or form-related actions, such as adding data to
  a table or adding terms in the Advanced section of the Agency Picker.
  </p>
  <sam-code-example language="html" [code]="example_2">
  ` + code_example_2 + `
  </sam-code-example>

  <div class="sam-ui hidden divider"></div>

  <h3 class="sam-ui dividing header">Tertiary</h3>
  <p class="doc-BodyText">
  They represent useful, but not necessary actions the user may want to take.
  Generally, these buttons are represented by an icon and related term, or
  simply an icon. Examples include actions such as '<em>Edit</em>', '<em>Subscribe</em>',
  '<em>Favorite</em>', or '<em>Share</em>'.
  </p>
  <sam-code-example language="html" [code]="example_3">
  ` + code_example_3 + `
  </sam-code-example>

  <div class="sam-ui hidden divider"></div>

  <h3 class="sam-ui dividing header">Negative</h3>
  <p class="doc-BodyText">
  Use the negative button when you want to perform a potentially destructive
  action.
  </p>
  <sam-code-example language="html" [code]="example_4">
  ` + code_example_4 + `
  </sam-code-example>

  <div class="sam-ui hidden divider"></div>

  <h2 class="sam-ui header">States</h2>

  <h3 class="sam-ui dividing header">Disabled</h3>
  <sam-code-example language="html" [code]="example">
  ` + code_example_disabled + `
  </sam-code-example>

  </doc-template>
  `
})
export class ButtonExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamButtonComponent';
  typedoc_content = '';

  example_1 = code_example_1.trim();
  example_1_2 = code_example_1_2.trim();
  example_1_3 = code_example_1_3.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  example_4 = code_example_4.trim();

  example = code_example_disabled.trim();

  public base = '_docs/elements/button/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
