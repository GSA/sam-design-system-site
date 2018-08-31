import { Component, Input, OnInit} from '@angular/core';

import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example_1 = `<sam-button-next action="primary">Create</sam-button-next>`;
const code_example_1_2 = `<sam-button-next action="submit">Submit</sam-button-next>`;
const code_example_2 = `<sam-button-next action="secondary">Add</sam-button-next>`;
const code_example_3 = `<sam-button-next action="tertiary">Share</sam-button-next>`;
const code_example_4 = `
<sam-button-next action="primary">Normal</sam-button-next>
<sam-button-next action="primary" size="small">Small</sam-button-next>`;
const code_example_disabled = `
<sam-button-next isDisabled="true" action="primary">Button</sam-button-next>
<sam-button-next isDisabled="true" action="secondary">Button</sam-button-next>
<sam-button-next isDisabled="true" action="tertiary">Button</sam-button-next>`;

@Component({
  selector: 'doc-button-next',
  template: `

  <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">
  
  <h1 class="sam heading">
    <span class="intro">Documentation</span>
    Buttons
  </h1>

  <h2 class="sam heading">Actions</h2>

  <div class="usa-grid doc-examples">
    <div class="usa-width-one-whole">
    
      <h3 class="sam heading">Primary</h3>
      <sam-code-example language="html" [code]="example_1">
      ` + code_example_1 + `
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
      ` + code_example_1_2 + `
      </sam-code-example>

    </div>
  </div>

  

  


  <h3 class="sam heading">Secondary</h3>
  <sam-code-example language="html" [code]="example_2">
  ` + code_example_2 + `
  </sam-code-example>

  <h3 class="sam heading">Tertiary</h3>
  <sam-code-example language="html" [code]="example_3">
  ` + code_example_3 + `
  </sam-code-example>

  <h2 class="sam heading">Sizes</h2>

  <sam-code-example language="html" [code]="example_4">
  ` + code_example_4 + `
  </sam-code-example>

  <h2 class="sam heading">States</h2>

  <h3 class="sam heading">Disabled</h3>
  <sam-code-example language="html" [code]="example">
  ` + code_example_disabled + `
  </sam-code-example>

  </doc-template>
  `
})
export class ButtonNextExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = 'SamButtonNextComponent';
  typedoc_content = '';

  example_1 = code_example_1.trim();
  example_1_2 = code_example_1_2.trim();
  example_2 = code_example_2.trim();
  example_3 = code_example_3.trim();
  example_4 = code_example_4.trim();

  example = code_example_disabled.trim();

  public base = '_docs/elements/button-next/';

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
