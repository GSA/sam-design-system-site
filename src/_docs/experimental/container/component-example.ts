import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

const code_example_1 = `
<sam-container gridLines="true">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum ut
    arcu pharetra pharetra sit amet eu libero. Ut tristique lacus dolor, nec
    lacinia ante ornare a. Phasellus sagittis, nulla eu porta imperdiet, nisi
    odio interdum dolor, sed dictum leo magna at odio. Donec at molestie elit.
  </p>
</sam-container>
`;

const code_example_2 = `
<sam-container gridLines="true">
  <p data-emphasis="divided">
    <strong>Left column</strong>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum ut
    arcu pharetra pharetra sit amet eu libero.
  </p>
  <p>
    <strong>Right column</strong>
    Pellentesque pellentesque orci eget lectus aliquet laoreet. Proin ac
    ultrices diam. Aenean et magna lorem.
  </p>
</sam-container>
`;

const code_example_3 = `
<sam-container gridLines="true">
  <p data-emphasis="high">
    <strong>Left column</strong>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum ut
    arcu pharetra pharetra sit amet eu libero.
  </p>
  <p>
    <strong>Right column</strong>
    Pellentesque pellentesque orci eget lectus aliquet laoreet.
  </p>
</sam-container>
`;

const code_example_4 = `
<sam-container gridLines="true">
  <p data-emphasis="lowest">
    <strong>Left column</strong>
    Lorem ipsum dolor sit amet.
  </p>
  <p>
    <strong>Right column</strong>
    Pellentesque pellentesque orci eget lectus aliquet laoreet.
  </p>
</sam-container>
`;

const code_example_5 = `
<sam-container gridLines="true">
  <p data-emphasis="low">
    <strong>Left column</strong>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <p>
    <strong>Right column</strong>
    Pellentesque pellentesque orci eget lectus aliquet laoreet.
  </p>
</sam-container>
`;

@Component({
  selector: 'doc-sam-container',
  template:
    `
    <doc-template [markdown]="markdown" [example]="" [typedoc]="typedoc_content">

     <div class="sam-ui warning message">
        <div class="header">
          Warning
        </div>
        <p>
          This component is under development.
        </p>
      </div>

      <p>
        Wrapping any content with <em>sam-container</em> will create a 6 column
        layout inside the container.
      </p>

      <sam-code-example language="html" [code]="example_1">
      ` +
    code_example_1 +
    `
      </sam-code-example>

      <h2 class="sam-ui header">Emphasis</h2>
      <p>
        By default any direct child of the container (p,a,div,span,etc) will
        take all the horizontal space avaliable. This can be adjusted by using
        the <em>data-emphasis</em> atribute.
      </p>

      <h3 class="sam-ui dividing header">Lowest</h3>
      <sam-code-example language="html" [code]="example_4">
      ` +
    code_example_4 +
    `
      </sam-code-example>

      <h3 class="sam-ui dividing header">Low</h3>
      <sam-code-example language="html" [code]="example_5">
      ` +
    code_example_5 +
    `
      </sam-code-example>

      <h3 class="sam-ui dividing header">Divided</h3>
      <sam-code-example language="html" [code]="example_2">
      ` +
    code_example_2 +
    `
      </sam-code-example>

      <h3 class="sam-ui dividing header">High</h3>
      <sam-code-example language="html" [code]="example_3">
      ` +
    code_example_3 +
    `
      </sam-code-example>


    </doc-template>`,
})
export class SamContainerComponentExampleComponent extends BaseExampleComponent
  implements OnInit {
  typedoc_target = 'SamContainerComponent';
  typedoc_content = ' ';

  example_1 = code_example_1;
  example_2 = code_example_2;
  example_3 = code_example_3;
  example_4 = code_example_4;
  example_5 = code_example_5;

  public base = '_docs/experimental/container/';

  constructor(
    _http: HttpClient,
    public service: DocumentationService,
    public mdService: MarkdownService
  ) {
    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
