import { Component, Input, OnInit } from '@angular/core';

import { BaseExampleComponent } from '../../baseexample.component';

import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const code_example_1 = `<sam-button-next action="primary">Create</sam-button-next>`;
const code_example_1_2 = `<sam-button-next action="submit">Submit</sam-button-next>`;
const code_example_2 = `<sam-button-next action="secondary">Add</sam-button-next>`;
const code_example_3 = `<sam-button-next action="tertiary">Share</sam-button-next>`;
const code_example_4 = `
<sam-button-next action="primary">Normal</sam-button-next>
<sam-button-next action="primary" size="small">Small</sam-button-next>`;
const code_example_5 = `
<sam-button-next action="primary">
  <sam-icon [icon]="faHome"></sam-icon>
  Home
</sam-button-next>
<sam-button-next action="primary" size="small">
  <sam-icon [icon]="faUser"></sam-icon>
  User
</sam-button-next>

<sam-button-next action="secondary">
  <sam-icon [icon]="faHome"></sam-icon>
  Home
</sam-button-next>
<sam-button-next action="secondary" size="small">
  <sam-icon [icon]="faUser"></sam-icon>
  User
</sam-button-next>

<sam-button-next action="tertiary">
  <sam-icon [icon]="faHome"></sam-icon>
  Home
</sam-button-next>
<sam-button-next action="tertiary" size="small">
  <sam-icon [icon]="faUser"></sam-icon>
  User
</sam-button-next>`;
const code_example_disabled = `
<sam-button-next isDisabled="true" action="primary">Button</sam-button-next>
<sam-button-next isDisabled="true" action="secondary">Button</sam-button-next>
<sam-button-next isDisabled="true" action="tertiary">Button</sam-button-next>`;

@Component({
  selector: 'doc-button-next',
  template:
    `

  <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

  <h2 class="sam heading">Primary Action</h2>

  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">

      <h3 class="sam heading">Primary</h3>
      <sam-code-example language="html" [code]="example_1">
      ` +
    code_example_1 +
    `
      </sam-code-example>

      <div class="sam-ui info message">
        <div class="header">
          Submit buttons
        </div>
        <p>
          There is a specific button action for submit buttons.
        </p>
      </div>
      <sam-code-example language="html" [code]="example_1_2">
      ` +
    code_example_1_2 +
    `
      </sam-code-example>

    </div>
  </div>

  <h2 class="sam heading">Secondary Action</h2>
  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
      <sam-code-example language="html" [code]="example_2">
      ` +
    code_example_2 +
    `
      </sam-code-example>
    </div>
  </div>

  <h2 class="sam heading">Tertiary Action</h2>
  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
      <sam-code-example language="html" [code]="example_3">
      ` +
    code_example_3 +
    `
      </sam-code-example>
    </div>
  </div>

  <h2 class="sam heading">Sizes</h2>
  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
      <sam-code-example language="html" [code]="example_4">
      ` +
    code_example_4 +
    `
      </sam-code-example>
    </div>
  </div>

  <h2 class="sam heading">Icons</h2>
  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
      <sam-code-example language="html" [code]="example_5">
      ` +
    code_example_5 +
    `
      </sam-code-example>
    </div>
  </div>

  <h2 class="sam heading">States</h2>
  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
      <h3 class="sam heading">Disabled</h3>
      <sam-code-example language="html" [code]="example">
      ` +
    code_example_disabled +
    `
      </sam-code-example>
    </div>
  </div>
  </doc-template>
  `,
})
export class ButtonNextExampleComponent extends BaseExampleComponent
  implements OnInit {
  typedoc_target = 'SamButtonNextComponent';
  typedoc_content = '';

  example_1 = code_example_1.trim();
  example_1_2 = code_example_1_2.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  example_4 = code_example_4.trim();
  example_5 = code_example_5.trim();
  example = code_example_disabled.trim();

  faHome = faHome;
  faUser = faUser;

  public base = '_docs/experimental/button-next/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService
  ) {
    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
